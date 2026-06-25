import { useState } from "react";

export default function FSDGenerator() {
  const [requirement, setRequirement] = useState("");
  const [templateText, setTemplateText] = useState("");
  const [templateFile, setTemplateFile] = useState(null); // State for the .docx file
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

      // Use FormData to send files to the backend
      const formData = new FormData();
      formData.append("requirement", requirement);
      
      if (templateFile) {
        formData.append("file", templateFile);
      } else if (templateText.trim()) {
        formData.append("template", templateText);
      }

      // --- UPDATED LIVE URL HERE ---
      const response = await fetch("https://automind-backend-ijqq.onrender.com/generate-fsd", {
        method: "POST",
        // Note: Do NOT set Content-Type manually when using FormData. 
        // The browser handles the multipart boundaries automatically.
        body: formData, 
      });

      if (!response.ok) {
        const errorData = await response.text();
        alert("Failed to generate FSD: " + errorData);
        return;
      }

      // Check if the backend sent a file or standard JSON text back
      const contentType = response.headers.get("content-type");
      
      if (contentType && contentType.includes("application/vnd.openxmlformats-officedocument.wordprocessingml.document")) {
        // Trigger a file download for the DOCX
        const blob = await response.blob();
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.href = url;
        a.download = "Generated_FSD.docx";
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        window.URL.revokeObjectURL(url);
        
        // Alert to notify user of successful generation and download
        alert("Success! Your FSD has been generated and downloaded.");
      } else {
        // Fallback for standard text generation
        const data = await response.json();
        setFsd(data.fsd);
      }
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
        Provide your requirements and optionally upload a `.docx` template. Groq AI will fill it in and return a completed document.
      </p>

      <div className="grid grid-cols-1 gap-6 mb-6">
        <div>
          <label className="block text-sm font-bold mb-2 text-slate-300">
            1. Business Requirements
          </label>
          <textarea
            className="w-full min-h-32 bg-slate-900 border border-white/10 rounded-3xl p-5 outline-none focus:border-cyan-400"
            placeholder="Example: User should be able to login using email and password..."
            value={requirement}
            onChange={(e) => setRequirement(e.target.value)}
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-bold mb-2 text-slate-300">
              2A. Upload .docx Template
            </label>
            <input
              type="file"
              accept=".docx"
              onChange={(e) => {
                const file = e.target.files[0];
                if (file) {
                  setTemplateFile(file);
                  // Alert to notify user that the file was successfully attached
                  alert(`Template "${file.name}" attached! It will be uploaded when you click Generate FSD.`);
                }
              }}
              className="w-full bg-slate-900 border border-white/10 rounded-3xl p-4 text-sm file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-cyan-400 file:text-slate-950 hover:file:bg-cyan-300"
            />
          </div>

          <div>
            <label className="block text-sm font-bold mb-2 text-slate-300">
              2B. Or Paste Text Template
            </label>
            <textarea
              disabled={!!templateFile} // Disable if a file is uploaded
              className={`w-full min-h-24 bg-slate-900 border border-white/10 rounded-3xl p-5 outline-none focus:border-cyan-400 ${templateFile ? 'opacity-50 cursor-not-allowed' : ''}`}
              placeholder="Paste text format here..."
              value={templateText}
              onChange={(e) => setTemplateText(e.target.value)}
            />
          </div>
        </div>
      </div>

      <button
        onClick={generateFSD}
        disabled={loading}
        className="mt-2 bg-cyan-400 text-slate-950 px-8 py-4 rounded-full font-bold hover:bg-cyan-300 disabled:opacity-50"
      >
        {loading ? "Processing Document..." : "Generate FSD"}
      </button>

      {/* Only show the text box if the backend returns standard text instead of a file */}
      {fsd && !templateFile && (
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