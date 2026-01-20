const express = require("express");
const Faq = require("../models/Faq");

const router = express.Router();

router.post("/faq", async (req, res) => {
  try {
    const { question, answer } = req.body;

    if (!question || !answer) {
      return res.status(400).json({ error: "question and answer required" });
    }

    const faq = await Faq.create({ question, answer });
    res.status(201).json(faq);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
