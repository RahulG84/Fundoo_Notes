export const Set_Grid_View = 'Set_Grid_View';
export const FETCH_LABELS = 'FETCH_LABELS';

export const setGridView = gridView => dispatch => {
  dispatch({
    type: Set_Grid_View,
    payload: gridView,
  });
};

export const fetchLabels = labelArray => dispatch => {
  dispatch({
    type: FETCH_LABELS,
    payload: labelArray,
  });
};
