import * as types from "../actions/actionTypes";
import initialState from "../reducers/initialState";

export default function unlimitedRatesReducer(
  state = initialState.unlimitedRates,
  action
) {
  switch (action.type) {
    case types.LOAD_UNLIMITED_RATES_SUCCESS:
      return action.unlimitedRates;
    default:
      return state;
  }
}
