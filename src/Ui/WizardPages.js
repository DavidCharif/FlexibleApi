import React from "react";
import { useWizardPages } from "../Hooks/useNavigationWizard";

export const WizardPages = ({ children }) => {
  const { currentIndex, setSteps } = useWizardPages()
  const pages = React.Children.toArray(children);
  const steps = React.Children.count(children);
  React.useEffect(() => {
    setSteps(steps);
  },[steps, setSteps])
  const currentPage = pages[currentIndex];
  
  return (
<div className="p-10 bg-red-300 text-xl">{currentPage}</div>
  )
}