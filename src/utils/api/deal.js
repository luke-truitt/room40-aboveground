import * as company from './company';

const {
    REACT_APP_API_BASE_URL,
    REACT_APP_DEAL_URL,
  } = process.env;

const axios = require("axios");

export function GetDealCompanies() {
    return axios.get(REACT_APP_API_BASE_URL + REACT_APP_DEAL_URL)
}
export function GetDeals() {
    return axios.get(REACT_APP_API_BASE_URL + REACT_APP_DEAL_URL);
}

export function GetDeal(deal_id) {
    return axios.get(REACT_APP_API_BASE_URL + REACT_APP_DEAL_URL + "/" + deal_id)  
}

export function AddDeal(deal) {
    
    axios
    .post(REACT_APP_API_BASE_URL + REACT_APP_DEAL_URL + "/", deal)
    .then(function (response) {
        console.log(response);
    })
    .catch(function (error) {
        console.log(error);
    });
}

export function UpdateDeal(deal_id, deal) {
    
    axios
        .put(REACT_APP_API_BASE_URL + REACT_APP_DEAL_URL+"/"+deal_id, deal)
        .then(function (response) {
            console.log(response);
        })
        .catch(function (error) {
            console.log(error);
        });
}

export function DeleteDeal(deal_id) {
    
    axios
    .delete(REACT_APP_API_BASE_URL + REACT_APP_DEAL_URL+"/"+deal_id)
    .then(function (response) {
        console.log(response);
    })
    .catch(function (error) {
        console.log(error);
    });
}