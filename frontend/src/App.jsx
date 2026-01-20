import { useState } from "react";

function App() {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const [loading, setLoading] = useState(false);

  const askAI = async () => {
    if (!question.trim()) return;

    setLoading(true);
    setAnswer("");

    try {
      const res = await fetch("http://localhost:5000/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ question }),
      });

      const data = await res.json();
      setAnswer(data.answer);
    } catch (err) {
      setAnswer("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="page">
      <div className="card">
        <h1>AI Support Chat</h1>

        <textarea
          placeholder="Ask anything…"
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
        />

        <button onClick={askAI} disabled={loading}>
          {loading ? "Thinking…" : "Ask AI"}
        </button>

        {answer && (
          <div className="response">
            <span>Response</span>
            <p>{answer}</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
