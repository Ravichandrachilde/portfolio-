from fastapi import FastAPI, APIRouter, HTTPException, Request  # Added Request here
from fastapi.responses import FileResponse
from dotenv import load_dotenv
from starlette.middleware.cors import CORSMiddleware
from motor.motor_asyncio import AsyncIOMotorClient
import os
import logging
from pathlib import Path
from pydantic import BaseModel, Field, ConfigDict, EmailStr
from typing import List
import uuid
from datetime import datetime, timezone

ROOT_DIR = Path(__file__).parent
load_dotenv(ROOT_DIR / '.env')

# MongoDB connection
mongo_url = os.environ['MONGO_URL']
client = AsyncIOMotorClient(mongo_url)
db = client[os.environ['DB_NAME']]

# Create the main app without a prefix
app = FastAPI()

# Create a router with the /api prefix
api_router = APIRouter(prefix="/api")

# --- Define Models ---

class VisitorLog(BaseModel):
    model_config = ConfigDict(extra="ignore")
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    city: str
    state: str
    country: str
    timestamp: datetime = Field(default_factory=lambda: datetime.now(timezone.utc))

class StatusCheck(BaseModel):
    model_config = ConfigDict(extra="ignore")
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    client_name: str
    timestamp: datetime = Field(default_factory=lambda: datetime.now(timezone.utc))

class StatusCheckCreate(BaseModel):
    client_name: str

class ContactSubmission(BaseModel):
    model_config = ConfigDict(extra="ignore")
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    name: str
    email: EmailStr
    subject: str
    message: str
    submitted_at: datetime = Field(default_factory=lambda: datetime.now(timezone.utc))
    status: str = "new"

class ContactSubmissionCreate(BaseModel):
    name: str
    email: EmailStr
    subject: str
    message: str

# --- Routes ---

@api_router.get("/")
async def root():
    return {"message": "Hello World"}

# NEW: Route to track visitor location from Vercel headers
@api_router.get("/track-visit")
async def track_visit(request: Request):
    try:
        # 1. Capture headers with case-insensitive check and multiple possible keys
        # Vercel often uses 'x-vercel-ip-city' but sometimes proxies capitalize them
        headers = request.headers
        
        city = headers.get('x-vercel-ip-city') or headers.get('X-Vercel-IP-City') or 'Unknown'
        state = headers.get('x-vercel-ip-country-region') or headers.get('X-Vercel-IP-Country-Region') or 'Unknown'
        country = headers.get('x-vercel-ip-country') or headers.get('X-Vercel-IP-Country') or 'Unknown'

        # 2. Logic to handle 'Unknown' - if city is unknown, check X-Forwarded-For as a fallback
        if city == 'Unknown':
            forwarded_for = headers.get('x-forwarded-for')
            logger.info(f"Geodata missing. Request IP: {forwarded_for}")

        visitor_obj = VisitorLog(city=city, state=state, country=country)
        
        # 3. Convert to dict and serialize for MongoDB
        doc = visitor_obj.model_dump()
        # Ensure we use a proper datetime object or ISO string for MongoDB
        if isinstance(doc.get('timestamp'), datetime):
            doc['timestamp'] = doc['timestamp'].isoformat()
        
        # 4. Save to collection
        await db.visitor_logs.insert_one(doc)
        
        logger.info(f"Successfully logged visit from: {city}, {state} ({country})")
        return {"status": "success", "location": f"{city}, {state}"}
        
    except Exception as e:
        logger.error(f"Error tracking visit: {str(e)}")
        return {"status": "error", "message": str(e)}

@api_router.post("/status", response_model=StatusCheck)
async def create_status_check(input: StatusCheckCreate):
    status_dict = input.model_dump()
    status_obj = StatusCheck(**status_dict)
    doc = status_obj.model_dump()
    doc['timestamp'] = doc['timestamp'].isoformat()
    _ = await db.status_checks.insert_one(doc)
    return status_obj

@api_router.get("/status", response_model=List[StatusCheck])
async def get_status_checks():
    status_checks = await db.status_checks.find({}, {"_id": 0}).to_list(1000)
    for check in status_checks:
        if isinstance(check['timestamp'], str):
            check['timestamp'] = datetime.fromisoformat(check['timestamp'])
    return status_checks

@api_router.post("/contact")
async def create_contact_submission(input: ContactSubmissionCreate):
    try:
        submission_dict = input.model_dump()
        submission_obj = ContactSubmission(**submission_dict)
        doc = submission_obj.model_dump()
        doc['submitted_at'] = doc['submitted_at'].isoformat()
        result = await db.contact_submissions.insert_one(doc)
        if result.inserted_id:
            logger.info(f"Contact submission created: {submission_obj.id}")
            return {"success": True, "message": "Contact form submitted", "id": submission_obj.id}
        else:
            raise HTTPException(status_code=500, detail="Failed to save submission")
    except Exception as e:
        logger.error(f"Error creating contact submission: {str(e)}")
        raise HTTPException(status_code=500, detail=str(e))

@api_router.get("/download-resume")
async def download_resume():
    resume_path = ROOT_DIR / "static" / "Ravi_Chandra_Sekhar_Resume.pdf"
    if not resume_path.exists():
        raise HTTPException(status_code=404, detail="Resume file not found")
    return FileResponse(
        path=str(resume_path),
        filename="Ravi_Chandra_Sekhar_Resume.pdf",
        media_type="application/pdf"
    )

# Include the router in the main app
app.include_router(api_router)

app.add_middleware(
    CORSMiddleware,
    allow_credentials=True,
    allow_origins=os.environ.get('CORS_ORIGINS', '*').split(','),
    allow_methods=["*"],
    allow_headers=["*"],
)

# Configure logging
logging.basicConfig(
    level=logging.INFO,
    format='%(asctime)s - %(name)s - %(levelname)s - %(message)s'
)
logger = logging.getLogger(__name__)

@app.on_event("shutdown")
async def shutdown_db_client():
    client.close()
