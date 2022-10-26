import {Set_Grid_View, FETCH_LABELS} from '../redux/Action';

const initialState = {
  gridView: false,
  labelData: [],
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case Set_Grid_View:
      return {
        ...state,
        gridView: !state.gridView,
      };
    case FETCH_LABELS:
      return {...state, labelData: action.payload};
    default:
      return state;
  }
};

export default userReducer;
