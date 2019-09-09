import { combineReducers } from "redux";

// product reducers
import products from "./productReducer";
import unlimitedRates from "./unlimitedReducer";
import basicData from "./basicDataReducer";

const rootReducer = combineReducers({
  products,
  unlimitedRates,
  basicData
});

export default rootReducer;
