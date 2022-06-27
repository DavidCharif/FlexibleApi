export const defaultInitialState = {
  activePageIndex: 0,
  steps: 0,
}

export const actions = {
  NEXT_PAGE: 'NEXT_PAGE',
  PREV_PAGE: 'PREV_PAGE',
  SET_STEPS: 'SET_STEPS',
}

export const combineReducers = (...reducers) => (state, action) => {
  return reducers.reduce((acc, nextReducer) => {
    return nextReducer(acc, action);
  }, state);
}

export const wizardReducer = (state, action) => {
  const { activePageIndex } = state;
  switch (action.type) {
    case actions.NEXT_PAGE:
      return {
        ...state,
        activePageIndex: activePageIndex + 1,
      }
    case actions.PREV_PAGE:
      return {
        ...state,
        activePageIndex: activePageIndex - 1,
      }
    case actions.SET_STEPS:
      return {
        ...state,
        steps: action.payload,
      }      

    default:
      return state;
  }
}