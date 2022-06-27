import React from "react";
import useWizardContext from "./useWizardContext";

export const useWizardNavigation = () => {
  const { goNextPage, goPrevPage, activePageIndex, steps } = useWizardContext();
  console.log('steps', steps)
  return {
    goNextPage,
    goPrevPage,
    currentIndex : activePageIndex + 1,
    steps,
  }
}

export const useWizardPages = ({totalSteps}) => {
  const { setSteps, activePageIndex } = useWizardContext();
  React.useEffect(() => {
    console.log('totalSteps', totalSteps)
    setSteps(totalSteps);
  }, [setSteps, totalSteps])
  return {
    activePageIndex,
  }
}

export const useWizardProgress = () => {
  const { activePageIndex, steps } = useWizardContext();
  return {
    currentIndex : activePageIndex+1,
    steps,
  }

}