import * as types from "./actionTypes";
import * as apiFetch from "../apiCalls/fetch"

// load unlimited rates success message
export function loadBasicDataListSuccess(basicData) {
    return { type: types.LOAD_BASIC_DATA_SUCCESS, basicData };
  }
  // load unlimitedRates payload 
  export function loadBasicData() {
    return function (dispatch){
      apiFetch.fetchBasicData().then(basicData => {
        dispatch(loadBasicDataListSuccess(basicData));
      }).catch(error => {
        throw error
      })
    }
  }