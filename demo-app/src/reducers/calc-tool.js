import { combineReducers } from 'redux';

import {
  ADD_ACTION, SUBTRACT_ACTION, MULTIPLY_ACTION,
  DIVIDE_ACTION, CLEAR_ACTION, SET_ERROR_ACTION,
  DELETE_HISTORY_ENTRY_ACTION,
} from '../actions/calc-tool';

export const historyReducer = (/* state */ history = [], action) => {
  if ([ADD_ACTION, SUBTRACT_ACTION, MULTIPLY_ACTION, DIVIDE_ACTION].includes(action.type)) {
    return [
      ...history,
      {
        opId: Math.max(...history.map(h => h.opId), 0) + 1,
        opName: action.type, opValue: action.value,
      },
    ];
  }

  if (action.type === DELETE_HISTORY_ENTRY_ACTION) {
    return history.filter(entry => entry.opId !== action.entryId);
  }

  if (action.type === CLEAR_ACTION) {
    return [];
  }

  return history;
}

export const errorMessageReducer = (_, action) => {

  if (action.type === SET_ERROR_ACTION) {
    return action.message;
  }

  return "";
}

// export const calcToolReducer = (state, action) => {
//   return {
//     ...state,
//     result: resultReducer(state.result, action),
//     history: historyReducer(state.history, action),
//   };
// };

export const calcToolReducer = combineReducers({
  history: historyReducer,
  errorMessage: errorMessageReducer,
});

// const combineReducers = (reducerMap) => {

//   return (state, action) => {

//     const initNewState = {
//       ...state,
//     };

//     return Object.keys(reducerMap).reduce((newState, mapKey) => {
//       newState[mapKey] = reducerMap[mapKey](state[mapKey], action);
//       return newState;
//     }, initNewState);

//   };
// };
