export const ADD_ACTION = 'ADD';
export const SUBTRACT_ACTION = 'SUBTRACT';
export const MULTIPLY_ACTION = 'MULTIPLY';
export const DIVIDE_ACTION = 'DIVIDE';
export const CLEAR_ACTION = 'CLEAR';
export const SET_ERROR_ACTION = 'SET_ERROR';
export const DELETE_HISTORY_ENTRY_ACTION = 'DELETE_HISTORY_ENTRY_ACTION';

export const createAddAction = value => ({ type: ADD_ACTION, value });
export const createSubtractAction = value => ({ type: SUBTRACT_ACTION, value });
export const createMultiplyAction = value => ({ type: MULTIPLY_ACTION, value });
export const createDivideAction = value => {
  if (value === 0) {
    return { type: SET_ERROR_ACTION, message: "Cannot divide by 0" };
  } else {
    return { type: DIVIDE_ACTION, value };
  }
};

export const createClearAction = value => ({ type: CLEAR_ACTION, value });

export const createDeleteHistoryEntryAction = (entryId) =>
  ({ type: DELETE_HISTORY_ENTRY_ACTION, entryId })