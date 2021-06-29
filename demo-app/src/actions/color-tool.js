export const REFRESH_COLORS_REQUEST_ACTION = 'REFRESH_COLORS_REQUEST';
export const REFRESH_COLORS_DONE_ACTION = 'REFRESH_COLORS_DONE';

export const ADD_COLOR_ACTION = 'ADD_COLOR';

export const DELETE_COLOR_REQUEST_ACTION = 'DELETE_COLOR_REQUEST';
export const DELETE_COLOR_DONE_ACTION = 'DELETE_COLOR_DONE';


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

export const createDeleteColorRequestAction = () =>
  ({ type: DELETE_COLOR_REQUEST_ACTION });

export const createDeleteColorDoneAction = () =>
  ({ type: DELETE_COLOR_DONE_ACTION });


export const deleteColor = colorId => {

  return dispatch => {

    dispatch(createDeleteColorRequestAction());

    return fetch("http://localhost:3060/colors/" + encodeURIComponent(colorId), {
      method: "DELETE",
    })
      //.then(() => dispatch(createDeleteColorDoneAction()));
      .then(() => dispatch(refreshColors()));

  };
}
