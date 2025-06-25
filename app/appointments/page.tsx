"use client";
import { useState } from "react";

export default function Appointments() {
  const [input, setInput] = useState("");
  const [response, setResponse] = useState("");

  const handleSubmit = async () => {
    try {
      const res = await fetch("http://localhost:3001/ai/process", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ input: input }),
      });
  
      if (!res.ok) {
        throw new Error(`HTTP error! Status: ${res.status}`);
      }
  
      const data = await res.json();
      setResponse(JSON.stringify(data, null, 2));
    } catch (error: any) {
      setResponse(`Error: ${error.message}`);
    }
  };
  

  return (
    <main className="flex flex-col items-center p-8">
      <h1 className="text-3xl font-bold mb-6">Schedule Appointment</h1>
      <textarea
        className="w-full max-w-lg h-32 p-4 border rounded mb-4"
        placeholder="Describe the appointment..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button
        className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700"
        onClick={handleSubmit}
      >
        Schedule
      </button>

      {response && (
        <pre className="mt-6 p-4 bg-gray-100 w-full max-w-lg rounded">
          {response}
        </pre>
      )}
    </main>
  );
}
