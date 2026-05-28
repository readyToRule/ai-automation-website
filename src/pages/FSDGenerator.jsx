import { useState } from "react";

export default function FSDGenerator() {
  const [requirement, setRequirement] = useState("");
  const [fsd, setFsd] = useState("");

  function generateFSD() {
    const output = `
1. Functional Overview
${requirement}

2. Scope
This feature enables users to perform the described business process through the application.

3. User Journey
- User accesses the relevant module.
- User enters required details.
- System validates input.
- System processes the request.
- User receives confirmation or error message.

4. Functional Requirements
- System shall allow users to initiate the process.
- System shall validate mandatory fields.
- System shall display success and failure messages.
- System shall maintain transaction/request status.

5. Field Validations
- Mandatory fields should not be blank.
- Invalid data should show proper error messages.
- System should prevent duplicate or incorrect submissions.

6. Business Rules
- User must be authenticated.
- Only eligible users/accounts should access the feature.
- Backend validations should be performed before final submission.

7. Error Scenarios
- Invalid input
- Backend failure
- Session timeout
- Unauthorized access
- Network/API failure

8. Assumptions
- User has valid access.
- Required backend APIs are available.
- Required business rules are configured.

9. Acceptance Criteria
- User can complete the process successfully.
- Invalid inputs show clear validation messages.
- System handles failures gracefully.
- Request status is updated correctly.
`;

    setFsd(output);
  }

  return (
    <div className="min-h-screen bg-slate-950 text-white p-10">
        <button
  onClick={() => window.history.back()}
  className="mb-6 text-cyan-400 hover:text-cyan-300 transition"
>
  ← Back
</button>
      <h1 className="text-4xl font-bold mb-4">FSD Generator</h1>

      <p className="text-slate-400 mb-8">
        Paste your rough requirement or BRD notes and generate a structured FSD draft.
      </p>

      <textarea
        className="w-full min-h-52 bg-slate-900 border border-white/10 rounded-3xl p-5 outline-none focus:border-cyan-400"
        placeholder="Paste requirement here..."
        value={requirement}
        onChange={(e) => setRequirement(e.target.value)}
      />

      <button
        onClick={generateFSD}
        className="mt-6 bg-cyan-400 text-slate-950 px-8 py-4 rounded-full font-bold hover:bg-cyan-300"
      >
        Generate FSD
      </button>

      {fsd && (
        <div className="mt-10 bg-slate-900 border border-white/10 rounded-3xl p-6 whitespace-pre-wrap">
          {fsd}
        </div>
      )}
    </div>
  );
}