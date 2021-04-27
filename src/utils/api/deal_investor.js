const {
    REACT_APP_API_BASE_URL,
    REACT_APP_DEAL_INVESTOR_URL,
  } = process.env;

const axios = require("axios");

export function GetDealInvestors() {
axios
    .get(REACT_APP_API_BASE_URL + REACT_APP_DEAL_INVESTOR_URL)
    .then(function (response) {
    console.log(response);
    })
    .catch(function (error) {
    console.log(error);
    });
}

export function GetDealInvestor(deal_investor_id) {
axios
    .get(REACT_APP_API_BASE_URL + REACT_APP_DEAL_INVESTOR_URL + "/" + deal_investor_id)
    .then(function (response) {
    console.log(response);
    })
    .catch(function (error) {
    console.log(error);
    });
}

export function AddDealInvestor(deal_investor) {
    
    axios
    .post(REACT_APP_API_BASE_URL + REACT_APP_DEAL_INVESTOR_URL + "/", deal_investor)
    .then(function (response) {
        console.log(response);
    })
    .catch(function (error) {
        console.log(error);
    });
}

export function UpdateDealInvestor(deal_investor_id, deal_investor) {
    
    axios
        .put(REACT_APP_API_BASE_URL + REACT_APP_DEAL_INVESTOR_URL+"/"+deal_investor_id, deal_investor)
        .then(function (response) {
            console.log(response);
        })
        .catch(function (error) {
            console.log(error);
        });
}

export function DeleteDealInvestor(deal_investor_id) {
    
    axios
    .delete(REACT_APP_API_BASE_URL + REACT_APP_DEAL_INVESTOR_URL+"/"+deal_investor_id)
    .then(function (response) {
        console.log(response);
    })
    .catch(function (error) {
        console.log(error);
    });
}