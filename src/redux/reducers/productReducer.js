import * as types from "../actions/actionTypes";

export default function productReducer(state = [], action) {
  switch (action.type) {
    case types.CREATE_NEW_PRODUCT:
      return [...state, { ...action.product }];
    default:
      return state;
  }
}
