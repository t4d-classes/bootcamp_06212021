export const REFRESH_COLORS_REQUEST_ACTION = 'REFRESH_COLORS_REQUEST';
export const REFRESH_COLORS_DONE_ACTION = 'REFRESH_COLORS_DONE';

export const ADD_COLOR_ACTION = 'ADD_COLOR';
export const DELETE_COLOR_ACTION = 'DELETE_COLOR';


export const createRefreshColorsRequestAction = () =>
  ({ type: REFRESH_COLORS_REQUEST_ACTION });

export const createRefreshColorsDoneAction = (colors) =>
  ({ type: REFRESH_COLORS_DONE_ACTION, colors });

export const refreshColors = () => {

  return (dispatch) => {

    dispatch(createRefreshColorsRequestAction());

    return fetch("http://localhost:3060/colors")
      .then(res => res.json())
      .then(colors => dispatch(createRefreshColorsDoneAction(colors)));
  };

};


export const createAddColorAction = color => ({
  type: ADD_COLOR_ACTION,
  color,
});

export const createDeleteColorAction = colorId => ({
  type: DELETE_COLOR_ACTION,
  colorId,
});
