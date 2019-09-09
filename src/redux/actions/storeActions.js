import * as types from "./actionTypes";
import * as apiFetch from "../apiCalls/fetch"

// add products to list of products
export function createProduct(product) {
  return { type: types.CREATE_NEW_PRODUCT, product };
}


// load products success message
export function loadFoodListSuccess(products) {
  return { type: types.LOAD_FOOD_SUCCESS, products };
}
// load products payload 
export function loadFood() {
  return function (dispatch){
    apiFetch.fetchProducts().then(products => {
      dispatch(loadFoodListSuccess(products));
    }).catch(error => {
      throw error
    })
  }
}






