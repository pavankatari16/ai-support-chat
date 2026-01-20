const express = require("express");
const router = express.Router();

router.post("/", async (req, res) => {
  const { question } = req.body;

  if (!question) {
    return res.json({ answer: "No question provided." });
  }

  if (!process.env.GEMINI_API_KEY) {
    return res.json({
      answer: `This is a mock AI response for: "${question}". Add GEMINI_API_KEY to enable real AI.`
    });
  }

  return res.json({
    answer: "AI response placeholder"
  });
});

module.exports = router;
