import { useState } from "react";
export default function useMultiStepForm(steps) {
  const [stepIndex, setStepIndex] = useState(0);

  const next = () => {
    setStepIndex((i) => {
      if (i >= steps.length - 1) return i;
      return i + 1;
    });
  };
  const prev = () => {
    setStepIndex((i) => {
      if (i <= 0) return i;
      return i - 1;
    });
  };
  const goto = (index) => {
    if (index > 0 && index < steps.length - 1) setStepIndex(index);
  };

  return {
    CurrentStep: steps[stepIndex],
    stepIndex,
    next,
    prev,
    goto,
    isFirst: stepIndex === 0,
    isLast: stepIndex === steps.length - 1,
    stepsLength: steps.length,
  };
}
