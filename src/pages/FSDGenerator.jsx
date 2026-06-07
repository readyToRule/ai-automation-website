import { useState } from "react";

export default function FSDGenerator() {
  const [requirement, setRequirement] = useState("");
  const [fsd, setFsd] = useState("");
  const [loading, setLoading] = useState(false);

  async function generateFSD() {
    if (!requirement.trim()) {
      alert("Please enter a requirement first.");
      return;
    }

    try {
      setLoading(true);
      setFsd("");

      const response = await fetch("http://localhost:3000/generate-fsd", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          requirement,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        alert(data.error || "Failed to generate FSD");
        return;
      }

      setFsd(data.fsd);
    } catch (error) {
      console.error(error);
      alert("Backend is not running or API failed.");
    } finally {
      setLoading(false);
    }
  }

  function copyFSD() {
    navigator.clipboard.writeText(fsd);
    alert("FSD copied!");
  }

  return (
    <div className="min-h-screen bg-slate-950 text-white p-10">
      <button
        onClick={() => window.history.back()}
        className="mb-6 text-cyan-400 hover:text-cyan-300 transition"
      >
        ← Back
      </button>

      <h1 className="text-4xl font-bold mb-4">AI FSD Generator</h1>

      <p className="text-slate-400 mb-8">
        Paste your rough requirement or BRD notes. Groq AI will generate a
        professional Functional Specification Document.
      </p>

      <textarea
        className="w-full min-h-52 bg-slate-900 border border-white/10 rounded-3xl p-5 outline-none focus:border-cyan-400"
        placeholder="Example: User should be able to login using email and password. System should validate credentials and redirect user to dashboard..."
        value={requirement}
        onChange={(e) => setRequirement(e.target.value)}
      />

      <button
        onClick={generateFSD}
        disabled={loading}
        className="mt-6 bg-cyan-400 text-slate-950 px-8 py-4 rounded-full font-bold hover:bg-cyan-300 disabled:opacity-50"
      >
        {loading ? "Generating FSD..." : "Generate FSD"}
      </button>

      {fsd && (
        <div className="mt-10 bg-slate-900 border border-white/10 rounded-3xl p-6">
          <div className="flex justify-between items-center mb-5">
            <h2 className="text-2xl font-bold">Generated FSD</h2>

            <button
              onClick={copyFSD}
              className="bg-white/10 px-4 py-2 rounded-full hover:bg-white/20"
            >
              Copy
            </button>
          </div>

          <div className="whitespace-pre-wrap text-slate-300 leading-relaxed">
            {fsd}
          </div>
        </div>
      )}
    </div>
  );
}