import { combineReducers } from 'redux';

import { ADD_ACTION, SUBTRACT_ACTION, MULTIPLY_ACTION, DIVIDE_ACTION, CLEAR_ACTION } from '../actions/calc-tool';

export const resultReducer = (/* state */ result = 0, action) => {

  switch (action.type) {
    case ADD_ACTION:
      return result + action.value;
    case SUBTRACT_ACTION:
      return result - action.value;
    case MULTIPLY_ACTION:
      return result * action.value;
    case DIVIDE_ACTION:
      return result / action.value;
    case CLEAR_ACTION:
      return 0;
    default:
      return result;
  }
};

export const historyReducer = (/* state */ history = [], action) => {
  if ([ADD_ACTION, SUBTRACT_ACTION, MULTIPLY_ACTION, DIVIDE_ACTION].includes(action.type)) {
    return [
      ...history,
      {
        opId: Math.max(...history.map(h => h.id), 0) + 1,
        opName: action.type, opValue: action.value,
      },
    ];
  }

  if (action.type === CLEAR_ACTION) {
    return [];
  }

  return history;
}

// export const calcToolReducer = (state, action) => {
//   return {
//     ...state,
//     result: resultReducer(state.result, action),
//     history: historyReducer(state.history, action),
//   };
// };

export const calcToolReducer = combineReducers({
  result: resultReducer,
  history: historyReducer,
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
