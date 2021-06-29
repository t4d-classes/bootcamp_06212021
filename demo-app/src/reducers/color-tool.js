
import { combineReducers } from 'redux';
import {
  ADD_COLOR_ACTION,
  DELETE_COLOR_ACTION,
} from '../actions/color-tool';

const colorList = [
  { id: 1, name: 'yellow', hexcode: 'aaa' },
  { id: 2, name: 'teal', hexcode: 'aaa' },
  { id: 3, name: 'orange', hexcode: 'aaa' },
  { id: 4, name: 'blue', hexcode: 'aaa' },
  { id: 5, name: 'green', hexcode: 'aaa' },
];

const colorsReducer = (colors = colorList, action) => {
  switch (action.type) {
    case ADD_COLOR_ACTION:
      return [
        ...colors,
        {
          ...action.color,
          id: Math.max(...colors.map(c => c.id), 0) + 1,
        },
      ];
    case DELETE_COLOR_ACTION:
      return colors.filter(c => c.id !== action.colorId);
    default:
      return colors;
  }
};

export const colorToolReducer = combineReducers({
  colors: colorsReducer,
});