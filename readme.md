
# Find App MVP

A minimal lost-and-found web application built with Google Cloud and MongoDB. This app allows users to register found items, earn tokens, search via voice, and purchase items in an auction-like interface.

---

## 📦 Stack
- **Frontend**: React (Vite)
- **Backend**: Node.js + Express (Cloud Run)
- **Database**: MongoDB Atlas
- **AI Voice**: Web Speech API (for voice search)
- **Deployment**: Google Cloud Run / Firebase Hosting

---

## 🚀 Features
- Register lost/found items with photo and location
- Earn platform tokens for item registration
- Voice search using Web Speech API
- Auction and token-based purchasing

---

## 🧪 Local Setup

### 1. Backend
```bash
cd backend
cp .env.example .env  # then edit with your MongoDB URI
npm install
npm start
```

### 2. Frontend
```bash
cd frontend
cp .env.example .env  # set VITE_API_BASE_URL=http://localhost:3000
npm install
npm run dev
```

---

## 🌐 Deploying Backend to Cloud Run
```bash
gcloud run deploy find-app-backend \
  --source . \
  --region us-central1 \
  --allow-unauthenticated \
  --set-env-vars MONGODB_URI=your-mongo-uri
```

---

## 📁 Folder Structure
```
find-app-mvp/
├── backend/         # Express + MongoDB backend
├── frontend/        # React frontend with voice + auction
├── README.md
└── .gitignore
```

---

## 🧠 Author Notes
This project was created for a hackathon demo. It is MVP-focused and minimal. Auth, file uploads, and image tagging AI are stubbed or simplified.

Feel free to fork and expand it!

---