export const REFRESH_COLORS_REQUEST_ACTION = 'REFRESH_COLORS_REQUEST';
export const REFRESH_COLORS_DONE_ACTION = 'REFRESH_COLORS_DONE';
export const ADD_COLOR_REQUEST_ACTION = 'ADD_COLOR_REQUEST';
export const ADD_COLOR_DONE_ACTION = 'ADD_COLOR_DONE';
export const DELETE_COLOR_REQUEST_ACTION = 'DELETE_COLOR_REQUEST';
export const DELETE_COLOR_DONE_ACTION = 'DELETE_COLOR_DONE';

// action creator
export const createRefreshColorsRequestAction = () =>
  ({ type: REFRESH_COLORS_REQUEST_ACTION });

// action create
export const createRefreshColorsDoneAction = (colors) =>
  ({ type: REFRESH_COLORS_DONE_ACTION, colors });

// event handler
// thunk creator
export const refreshColors = () => {

  // thunk - function executed in the future
  // async orchestrator
  return (dispatch) => {

    dispatch(createRefreshColorsRequestAction());

    return fetch("http://localhost:3060/colors")
      .then(res => res.json())
      .then(colors => dispatch(createRefreshColorsDoneAction(colors)));
  };
};

export const createAddColorRequestAction = () =>
  ({ type: ADD_COLOR_REQUEST_ACTION });

export const createAddColorDoneAction = () =>
  ({ type: ADD_COLOR_DONE_ACTION });

export const addColor = color => {

  return dispatch => {

    dispatch(createAddColorRequestAction());

    return fetch("http://localhost:3060/colors", {
      method: "POST",
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(color),
    })
      .then(() => dispatch(refreshColors()));
  };
}

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
      .then(() => dispatch(refreshColors()));

  };
}
