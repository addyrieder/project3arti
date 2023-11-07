import React, { useState } from 'react';
import './style.css'; // Make sure the path is correct for your CSS file

const RecordingIndicator = () => {
  // State to track whether recording is in progress
  const [isRecording, setIsRecording] = useState(false);

  // Function to toggle recording state
  const toggleRecording = () => {
    setIsRecording(!isRecording);
  };

  // Class name conditional on the isRecording state
  const indicatorClasses = `recording-indicator ${isRecording ? 'recording' : ''}`;

  return (
    <div className={indicatorClasses} onClick={toggleRecording}>
      {/* ... Other elements inside your recording indicator ... */}
    </div>
  );
};

export default RecordingIndicator;
