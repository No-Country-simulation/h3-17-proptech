import React, { useState } from "react";
import {
  PlanCalculator,
  PlanDocument,
  PlanSelected,
  PlanData,
  PlanTerms,
  PlanSend,
} from "../../components";
import "./credit-simulator.css";

export function CreditSimulator() {
  const [currentStep, setCurrentStep] = useState(1); // Controla el paso actual
  const totalSteps = 6; // Total de pasos del progreso

  const handleNextStep = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handlePreviousStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  return (
    <div className="simulator-container">
      {/* Indicador de progreso */}
      <div className="progress-steps">
        {[...Array(totalSteps)].map((_, index) => (
          <React.Fragment key={index}>
            <div className={`step ${index + 1 <= currentStep ? "active" : ""}`}>
              {String(index + 1).padStart(2, "0")}
            </div>
            {index < totalSteps - 1 && <div className="step-line"></div>}
          </React.Fragment>
        ))}
      </div>

      {/* Contenido dinámico según el paso */}
      <div className="content-container">
        {currentStep === 1 && (
          <PlanCalculator handleNextStep={handleNextStep} />
        )}
        {currentStep === 2 && (
          <PlanSelected
            handleNextStep={handleNextStep}
            handlePreviousStep={handlePreviousStep}
          />
        )}
        {currentStep === 3 && (
          <PlanDocument
            handleNextStep={handleNextStep}
            handlePreviousStep={handlePreviousStep}
          />
        )}
        {currentStep === 4 && (
          <PlanData
            handleNextStep={handleNextStep}
            handlePreviousStep={handlePreviousStep}
          />
        )}
        {currentStep === 5 && (
          <PlanTerms
            handleNextStep={handleNextStep}
            handlePreviousStep={handlePreviousStep}
          />
        )}
        {currentStep === 6 && (
          <PlanSend handlePreviousStep={handlePreviousStep} />
        )}
      </div>
    </div>
  );
}
