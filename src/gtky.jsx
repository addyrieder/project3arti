import React from "react";
import "./style.css";

export const GradientCircle = () => {
  return <div className="gradient-circle" />;
};

export const GetToKnowYouPage = () => {
  return (
    <div className="get-to-know-you-page">
      <div className="div">
        <p className="text-wrapper">Tell me about the best day of your life...</p>
        <div className="recording-button">
          <div className="recording-in-process">
            <div className="ellipse" />
          </div>
        </div>
        <div className="text-wrapper-2">Start</div>
      </div>
    </div>
  );
};
