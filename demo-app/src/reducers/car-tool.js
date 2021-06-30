import { combineReducers } from 'redux';

import {
  REFRESH_CARS_DONE_ACTION,
  EDIT_CAR_ACTION, CANCEL_CAR_ACTION
} from '../actions/car-tool';

export const carsReducer = (cars = [], action) => {

  switch (action.type) {
    case REFRESH_CARS_DONE_ACTION:
      return action.cars;
    default:
      return cars;
  }
};

export const editCarIdReducer = (editCarId = -1, action) => {

  if (action.type === EDIT_CAR_ACTION) {
    return action.carId;
  }

  if ([
    REFRESH_CARS_DONE_ACTION, CANCEL_CAR_ACTION
  ].includes(action.type)) {
    return -1;
  }

  return editCarId; 
};

const isLoadingReducer = (isLoading = false, action) => {

  if (action.type.includes("REQUEST")) {
    return true;
  }

  if (action.type.includes("DONE")) {
    return false;
  }

  return isLoading;
};

export const carToolReducer = combineReducers({
  cars: carsReducer,
  editCarId: editCarIdReducer,
  isLoading: isLoadingReducer,
});