import { createStore } from 'redux';

import { calcToolReducer } from '../reducers/calc-tool';

export const calcToolStore = createStore(calcToolReducer);