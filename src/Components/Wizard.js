import React from "react";
import { WizardContext } from "../Context/WizardContext";
import { combineReducers, defaultInitialState, wizardReducer } from "../Reducer/Reducer";

const defaultReducer = (state, action) => state

const Wizard = ({ children, initialState= {}, reducer = defaultReducer }) => {
  const [{ activePageIndex, steps }, dispatch] = React.useReducer(
   combineReducers(wizardReducer, reducer),
    {
      ...defaultInitialState,
      ...initialState,
    }
  );

  const goPrevPage = () => {
    dispatch({ type: "PREV_PAGE" });
  };
  const goNextPage = () => {
    dispatch({ type: "NEXT_PAGE" });
  };
  const setSteps = React.useCallback(
    (steps) => {
      dispatch({ type: "SET_STEPS", payload: steps });
    },
    [dispatch]
  );

  const context = {
    activePageIndex,
    goPrevPage,
    goNextPage,
    steps,
    setSteps,
  };

  return (
    <WizardContext.Provider value={context}>
      <div className="mx-auto border-2 border-sky-400 w-1/3 mt-44 rounded-lg">
        {children}
      </div>
    </WizardContext.Provider>
  );
};

export default Wizard;
