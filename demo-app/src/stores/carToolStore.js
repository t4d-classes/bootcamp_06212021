import { createStore } from 'redux';

import { carToolReducer } from '../reducers/car-tool';

export const carToolStore = createStore(carToolReducer);