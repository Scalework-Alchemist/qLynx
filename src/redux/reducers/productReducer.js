import * as types from "../actions/actionTypes";
import initialState from "../reducers/initialState";

export default function productReducer(state = initialState.products, action) {
  switch (action.type) {
    case types.LOAD_FOOD_SUCCESS:
      return action.products;
    default:
      return state;
  }
}
