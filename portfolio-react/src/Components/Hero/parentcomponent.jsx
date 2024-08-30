// ParentComponent.js
import React, { useState } from 'react';
import Hero from './Hero';
import ResumeModal from './Resume_Model'; // Import the ResumeModal component

const ParentComponent = () => {
  const [showResumeModal, setShowResumeModal] = useState(false);

  const openResumeModal = () => {
    setShowResumeModal(true);
  };

  const closeResumeModal = () => {
    setShowResumeModal(false);
  };

  return (
    <>
      <Hero openResumeModal={openResumeModal} />
      {showResumeModal && <ResumeModal onClose={closeResumeModal} />} {/* Pass onClose prop */}
    </>
  );
};

export default ParentComponent;
