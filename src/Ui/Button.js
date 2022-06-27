import React from "react";
import useWizardContext from "../Hooks/useWizardContext";

export const ButtonPrev = () => {
  const { activePageIndex, goPrevPage } = useWizardContext();

  return (
    <button
      className="bg-blue-500 hover:bg-blue-700 p-1 w-20 rounded-xl disabled:bg-blue-100"
      onClick={goPrevPage}
      disabled={activePageIndex === 0}
    >
      Back
    </button>
  );
};
export const ButtonNext = () => {
  const { activePageIndex, goNextPage, steps } =
   useWizardContext();
  return (
    <button
      className="bg-blue-500 hover:bg-blue-700 p-1 w-20 rounded-xl disabled:bg-blue-100"
      onClick={goNextPage}
      disabled={activePageIndex === steps - 1}
    >
      Next
    </button>
  );
};
