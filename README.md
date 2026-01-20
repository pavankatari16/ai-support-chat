# AI-Powered Customer Support Chat Platform

This project is a simplified AI-powered customer support chat application built as part of a technical assessment.

The system allows users to submit queries through a web interface and receive intelligent responses via a backend API. The architecture is designed to be extensible, production-oriented, and easy to evaluate.

---

## Features

- Chat API built with Node.js and Express
- MongoDB Atlas integration for persistence
- Graceful fallback responses when AI keys are unavailable
- Clean separation between frontend and backend
- Simple React-based user interface
- Environment-based configuration

---

## Tech Stack

### Backend
- Node.js
- Express.js
- MongoDB Atlas
- Mongoose

### Frontend
- React (Vite)
- Fetch API
- Basic CSS styling

---

## Project Structure

ai-support-chat/
├── backend/
│ ├── routes/
│ ├── models/
│ ├── middleware/
│ ├── server.js
│ └── package.json
├── frontend/
│ ├── src/
│ ├── package.json
│ └── vite.config.js
└── README.md

---

## Setup Instructions

### Backend

```bash
cd backend
npm install
npm run dev

## Create a .env file:

MONGO_URI=your_mongodb_connection_string
PORT=5000

## Frontend
cd frontend
npm install
npm run dev

## API
POST /api/chat

## Request:

{
  "question": "What is Spotify?"
}


## Response:

{
  "answer": "This is a fallback AI response..."
}

## Notes

The system is designed to integrate with external AI providers.

If no API key is provided, the application returns a safe fallback response.

This approach ensures the application remains functional during evaluation.