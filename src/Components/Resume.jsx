import React, { useState } from "react";
import { Worker, Viewer } from "@react-pdf-viewer/core";
import "@react-pdf-viewer/core/lib/styles/index.css";

const Resume = () => {
  const [showResume, setShowResume] = useState(false);

  const handleResumeToggle = () => {
    setShowResume(!showResume);
  };

  return (
    <section className="bg-gradient-to-r from-gray-800 via-gray-900 to-black py-20">
      <div className="container mx-auto px-6 md:px-12 text-white">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-indigo-400">My Resume</h2>
          <p className="text-lg text-gray-300 mt-4">
            Highlighting my journey through academic and personal projects in my resume. Open to feedback and opportunities.
          </p>
        </div>

        <div className="text-center mt-12 mb-12">
          <button
            onClick={handleResumeToggle}
            className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 text-xl rounded-full transition-all duration-300 ease-in-out"
          >
            {showResume ? "Close Resume" : "View My Resume"}
          </button>
        </div>

        {showResume && (
          <div className="flex justify-center mt-12">
            <Worker workerUrl={`https://unpkg.com/pdfjs-dist@3.11.174/build/pdf.worker.min.js`}>
            <Viewer fileUrl="/resume.pdf" />
</Worker>

          </div>
        )}
      </div>
    </section>
  );
};

export default Resume;
