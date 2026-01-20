const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");

dotenv.config();

const app = express();

/* =======================
   CORS (FINAL – STABLE)
======================= */
const corsOptions = {
  origin: [
    "http://localhost:5173",
    "https://ai-support-chat-frontend-84gm.onrender.com"
  ],
  methods: ["GET", "POST", "OPTIONS"],
  allowedHeaders: ["Content-Type", "Authorization"]
};

app.use(cors(corsOptions));
app.options("*", cors(corsOptions)); // ✅ THIS FIXES PREFLIGHT

app.use(express.json());

/* =======================
   ROUTES
======================= */
const authRoutes = require("./routes/auth");
const chatRoutes = require("./routes/chat");
const adminRoutes = require("./routes/admin");

app.use("/api/auth", authRoutes);
app.use("/api/chat", chatRoutes);
app.use("/api/admin", adminRoutes);

/* =======================
   TEST ROUTE
======================= */
app.get("/", (req, res) => {
  res.send("API running");
});

/* =======================
   DB + SERVER
======================= */
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB connected"))
  .catch(err => console.error(err));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on ${PORT}`));
