const { GoogleGenerativeAI } = require("@google/generative-ai");

async function askGemini(prompt) {
  // ✅ If no API key, return mock AI response
  if (!process.env.GEMINI_API_KEY) {
    return `This is a simulated AI response. 
The system is designed to integrate with Gemini/OpenAI when an API key is provided.`;
  }

  const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
  const model = genAI.getGenerativeModel({
    model: "models/gemini-pro"
  });

  const result = await model.generateContent(prompt);
  return result.response.text();
}

module.exports = askGemini;
