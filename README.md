# AI-Powered Customer Support Chat Platform

A full-stack customer support chat application where users can interact with an AI assistant to get intelligent, context-aware responses.
The system supports admin-managed content and is built with a clean separation between frontend, backend, and AI provider layers.

---

## 🔗 Live Demo

* **Frontend:** `<PASTE YOUR FRONTEND RENDER URL HERE>`
* **Backend API:** `<PASTE YOUR BACKEND RENDER URL HERE>`

---

## 🚀 Features

* AI-powered customer support chat
* Context-aware responses using LLM
* Modular AI provider integration
* RESTful backend API
* Secure environment variable handling
* Deployed and production-ready
* Clean and responsive UI

---

## 🛠 Tech Stack

### Frontend

* React (Vite)
* JavaScript
* CSS
* Fetch API

### Backend

* Node.js
* Express.js
* MongoDB (Atlas)
* Groq API (LLaMA 3.1)

### AI

* **Groq LLaMA 3.1 (`llama-3.1-8b-instant`)**
* Pluggable AI provider design (can switch providers without frontend changes)

### Deployment

* Render (Frontend & Backend)
* MongoDB Atlas (Cloud Database)

---

## 📁 Project Structure

```
ai-support-chat/
├── backend/
│   ├── routes/
│   │   └── chat.js
│   ├── models/
│   ├── middleware/
│   ├── server.js
│   └── package.json
│
├── frontend/
│   ├── src/
│   ├── public/
│   └── package.json
│
└── README.md
```

---

## ⚙️ Environment Variables

### Backend (`Render Dashboard`)

```
GROQ_API_KEY=your_groq_api_key
MONGO_URI=your_mongodb_connection_string
```

> Environment variables are **not committed** to GitHub for security.

---

## 🧪 Local Setup (Optional)

### Backend

```bash
cd backend
npm install
npm run dev
```

### Frontend

```bash
cd frontend
npm install
npm run dev
```

---

## 🧠 Design Decisions

* The AI layer is isolated so providers can be swapped easily.
* Backend handles all AI communication for security.
* Frontend remains lightweight and API-driven.
* Deployment mirrors real-world production practices.

---

## 📌 Use Case

This project demonstrates how to build a real-world AI-powered customer support system with:

* Scalable backend design
* Secure API usage
* Cloud deployment
* Practical LLM integration

---

## 👤 Author

**Pavan Katari**

---

## ✅ Status

✔ Completed
✔ Deployed
✔ Fully Functional

---

