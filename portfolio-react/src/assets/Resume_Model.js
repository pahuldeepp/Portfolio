import React from 'react';

const ResumeModal = ({ onClose }) => {
  const handleDownload = () => {
    // Add logic for downloading the resume
    console.log("Downloading resume...");
  };

  const handleOpen = () => {
    // Add logic for opening the resume
    console.log("Opening resume...");
  };

  return (
    <div className="resume-modal">
      <div className="resume-modal-content">
        <h2>Resume Options</h2>
        <button onClick={handleDownload}>Download</button>
        <button onClick={handleOpen}>Open</button>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default ResumeModal;