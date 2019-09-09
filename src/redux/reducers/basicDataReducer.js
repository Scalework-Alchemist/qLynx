import * as types from "../actions/actionTypes";
import initialState from "../reducers/initialState";

export default function basicDataReducer(
  state = initialState.basicData,
  action
) {
  switch (action.type) {
    case types.LOAD_BASIC_DATA_SUCCESS:
      return action.basicData;
    default:
      return state;
  }
}
