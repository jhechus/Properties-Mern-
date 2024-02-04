"use client";

import React, { useEffect } from "react";
import { Steps } from "antd";
import Basic from "./basic";
import Location from "./Location";
import Amenities from "./Amenities";
import Media from "./Media";
import Contact from "./Contact";

// Interface for PropertiesFormStepProps
export interface PropertiesFormStepProps {
  currentStep: number;
  setCurrentStep: (currentStep: number) => void;
  finalValues: any;
  setFinalValues: (finalValues: any) => void;
}

// PropertiesForm component
function PropertiesForm() {
  // Initializing finalValues and currentStep state variables
  const [finalValues, setFinalValues] = React.useState({
    Basic: {},
    location: {},
    amenities: {},
    media: {},
    contact: {},
  });
  const [currentStep = 0, setCurrentStep] = React.useState(0);

  const commonPropsForSteps: any = {
    currentStep,
    setCurrentStep,
    finalValues,
    setFinalValues,
  };

  const steps = [
    {
      title: "Basic",
      content: <Basic {...commonPropsForSteps} />,
    },
    {
      title: "Location",
      content: <Location {...commonPropsForSteps} />,
    },
    {
      title: "Amenities",
      content: <Amenities {...commonPropsForSteps} />,
    },
    {
      title: "Media",
      content: <Media {...commonPropsForSteps} />,
    },
    {
      title: "Contact",
      content: <Contact {...commonPropsForSteps} />,
    },
  ];

  useEffect(() => {
    console.log(finalValues);
  }, [finalValues]);

  return (
    <div>
      <Steps current={currentStep} items={steps} />

      <div className=" mt-8">{steps[currentStep].content}</div>
    </div>
  );
}

export default PropertiesForm;
