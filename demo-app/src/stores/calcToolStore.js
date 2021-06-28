import { createStore } from 'redux';

import { calcToolReducer } from '../reducers/calc-tool';


// const createStore = (reducerFn) => {

//   let currentState = undefined;
//   const subscriberFns = [];

//   return {
//     // utilized in the useSelector hook to get the state that is passed into the selector function
//     getState() {
//       return currentState;
//     },
//     // this is the function reference returned by useDispatch
//     dispatch(action) {
//       currentState = reducerFn(currentState, action);
//       subscriberFns.forEach(fn => fn()); // trigger the function passed to useSelector to execute
//     },
//     // the useSelector hook subscribes to the store
//     subscribe(fn) {
//       subscriberFns.push(fn);
//     }
//   };
// };

export const calcToolStore = createStore(calcToolReducer);