import { combineReducers } from "redux";

// product reducers
import products from "./productReducer";

const rootReducer = combineReducers({
  products
});

export default rootReducer;
