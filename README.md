# Portfolio Website - Deployment Package

This package contains all files needed to deploy your portfolio website.

## 📁 Contents

- `backend/` - FastAPI backend application
- `frontend/` - React frontend application
- `DEPLOYMENT_GUIDE.md` - Complete deployment instructions

## 🚀 Quick Start

1. Read `DEPLOYMENT_GUIDE.md` for detailed instructions
2. Choose a deployment platform (Vercel + Railway recommended)
3. Follow the step-by-step guide
4. Update environment variables with your URLs

## 📝 Environment Variables

### Backend
Copy `backend/.env.example` to `backend/.env` and fill in:
- MongoDB connection URL
- Database name
- CORS origins

### Frontend
Copy `frontend/.env.example` to `frontend/.env` and fill in:
- Backend API URL (after deploying backend)

## 🔗 Deployment Platforms

**Recommended (Free):**
- Frontend: Vercel or Netlify
- Backend: Railway or Render
- Database: MongoDB Atlas or Railway

See `DEPLOYMENT_GUIDE.md` for complete instructions.

## 📞 Support

For deployment help, refer to:
- Railway: https://docs.railway.app
- Vercel: https://vercel.com/docs
- Netlify: https://docs.netlify.com

Good luck! 🚀
