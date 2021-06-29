
import { combineReducers } from 'redux';
import {
  REFRESH_COLORS_DONE_ACTION,
  ADD_COLOR_ACTION,
} from '../actions/color-tool';

const colorsReducer = (colors = [], action) => {
  switch (action.type) {
    case REFRESH_COLORS_DONE_ACTION:
      return action.colors;
    case ADD_COLOR_ACTION:
      return [
        ...colors,
        {
          ...action.color,
          id: Math.max(...colors.map(c => c.id), 0) + 1,
        },
      ];
    default:
      return colors;
  }
};

export const colorToolReducer = combineReducers({
  colors: colorsReducer,
});