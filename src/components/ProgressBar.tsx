import React from "react";

interface ProgressBarProps {
  totalSteps: number;
  currentStep: number;
}

const ProgressBar: React.FC<ProgressBarProps> = ({
  totalSteps,
  currentStep,
}) => {
  return (
    <div className="flex justify-center m-2" style={{ wordSpacing: "0px" }}>
      {Array.from({ length: totalSteps }).map((_, index) => (
        <div
          key={index}
          style={{ margin: "1.2px", height: "3px" }}
          className={` rounded-full transition ease-in delay-25 ${
            index === currentStep
              ? "bg-blue-500 transition ease-in delay-25 w-7"
              : "bg-gray-300 transition ease-in delay-25 w-2"
          }`}
        ></div>
      ))}
    </div>
  );
};

export default ProgressBar;
