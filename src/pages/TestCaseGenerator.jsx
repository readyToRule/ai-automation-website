import { useState } from "react";

export default function TestCaseGenerator() {
  const [requirement, setRequirement] = useState("");
  const [testCases, setTestCases] = useState("");
  const [loading, setLoading] = useState(false);

  async function generateTestCases() {
    if (!requirement.trim()) {
      alert("Please enter a business requirement or user story.");
      return;
    }

    try {
      setLoading(true);
      setTestCases("");

      // --- UPDATED LIVE URL HERE ---
      const response = await fetch("https://automind-backend-ijqq.onrender.com/generate-test-cases", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ requirement }),
      });

      const data = await response.json();

      if (!response.ok) {
        alert(data.error || "Failed to generate test cases");
        return;
      }

      setTestCases(data.testCases);
    } catch (error) {
      console.error(error);
      alert("Backend is not running or API failed.");
    } finally {
      setLoading(false);
    }
  }

  function copyToClipboard() {
    navigator.clipboard.writeText(testCases);
    alert("Test cases copied to clipboard!");
  }

  function exportToCSV() {
    if (!testCases) return;

    // Define CSV headers
    let csvContent = "Test Case ID,Title,Test Type,Pre-conditions,Test Steps,Expected Result\n";

    // Split the AI response into individual test case blocks
    const cases = testCases.split("**Test Case ID:**").filter(Boolean);

    cases.forEach((tc) => {
      // Safely extract data based on the AI's markdown headings
      const extract = (regex) => {
        const match = tc.match(regex);
        return match ? match[1].trim().replace(/"/g, '""') : ""; // Escape quotes for CSV
      };

      const id = extract(/(.*?)\n/);
      const title = extract(/\*\*Title:\*\*(.*?)\*\*Test Type:\*\*/s);
      const type = extract(/\*\*Test Type:\*\*(.*?)\*\*Pre-conditions:\*\*/s);
      const pre = extract(/\*\*Pre-conditions:\*\*(.*?)\*\*Test Steps:\*\*/s);
      const steps = extract(/\*\*Test Steps:\*\*(.*?)\*\*Expected Result:\*\*/s);
      const exp = extract(/\*\*Expected Result:\*\*(.*?)(?:\n---|---|$)/s);

      // Add as a new row in the CSV
      csvContent += `"${id}","${title}","${type}","${pre}","${steps}","${exp}"\n`;
    });

    // Create a downloadable Blob
    const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.setAttribute("download", "QA_Test_Cases.csv");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }

  return (
    <div className="min-h-screen bg-slate-950 text-white p-10">
      <button
        onClick={() => window.history.back()}
        className="mb-6 text-cyan-400 hover:text-cyan-300 transition"
      >
        ← Back
      </button>

      <h1 className="text-4xl font-bold mb-4">AI Test Case Generator</h1>

      <p className="text-slate-400 mb-8">
        Paste your business requirements, user stories, or FSD snippets. The AI will generate professional QA test cases covering positive, negative, and edge scenarios.
      </p>

      <div className="mb-6">
        <label className="block text-sm font-bold mb-2 text-slate-300">
          Requirement / Feature Description
        </label>
        <textarea
          className="w-full min-h-40 bg-slate-900 border border-white/10 rounded-3xl p-5 outline-none focus:border-cyan-400"
          placeholder="Example: The checkout page should accept credit card payments via Stripe. It must validate the card number, CVV, and expiry date before submission..."
          value={requirement}
          onChange={(e) => setRequirement(e.target.value)}
        />
      </div>

      <button
        onClick={generateTestCases}
        disabled={loading}
        className="mt-2 bg-cyan-400 text-slate-950 px-8 py-4 rounded-full font-bold hover:bg-cyan-300 disabled:opacity-50"
      >
        {loading ? "Writing Test Cases..." : "Generate Test Cases"}
      </button>

      {testCases && (
        <div className="mt-10 bg-slate-900 border border-white/10 rounded-3xl p-6">
          <div className="flex justify-between items-center mb-5">
            <h2 className="text-2xl font-bold">Generated Test Suite</h2>
            
            <div className="flex gap-4">
              <button
                onClick={copyToClipboard}
                className="bg-white/10 px-4 py-2 rounded-full hover:bg-white/20 transition"
              >
                Copy Text
              </button>
              <button
                onClick={exportToCSV}
                className="bg-cyan-400 text-slate-950 px-4 py-2 rounded-full font-bold hover:bg-cyan-300 transition"
              >
                Export CSV
              </button>
            </div>
          </div>
          <div className="whitespace-pre-wrap text-slate-300 leading-relaxed font-mono text-sm">
            {testCases}
          </div>
        </div>
      )}
    </div>
  );
}