import axios from "axios";

const foodProducts = "http://localhost:3000/food";
const unlimitedRates = "http://localhost:3000/unlimited";
const basicData = "http://localhost:3000/basicData"

export function fetchProducts(){
  return axios
    .get(foodProducts)
    .then(response => {
       return response.data
    })
    .catch(error => {
      console.log(error);
    });
};

export function fetchUnlimited(){
  return axios
    .get(unlimitedRates)
    .then(response => {
       return response.data
    })
    .catch(error => {
      console.log(error);
    });
};

export function fetchBasicData(){
  return axios
    .get(basicData)
    .then(response => {
       return response.data
    })
    .catch(error => {
      console.log(error);
    });
};


