import { createStore } from 'redux';

import { colorToolReducer } from '../reducers/color-tool';

export const colorToolStore = createStore(colorToolReducer);