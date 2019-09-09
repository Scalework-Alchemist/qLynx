import * as types from "./actionTypes";
import * as apiFetch from "../apiCalls/fetch"

// load unlimited rates success message
export function loadUnlimitedListSuccess(unlimitedRates) {
    return { type: types.LOAD_UNLIMITED_RATES_SUCCESS, unlimitedRates };
  }
  // load unlimitedRates payload 
  export function loadUnlimited() {
    return function (dispatch){
      apiFetch.fetchUnlimited().then(unlimitedRates => {
        dispatch(loadUnlimitedListSuccess(unlimitedRates));
      }).catch(error => {
        throw error
      })
    }
  }