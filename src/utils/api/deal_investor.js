const {
    REACT_APP_API_BASE_URL,
    REACT_APP_DEAL_INVESTOR_URL,
  } = process.env;

const axios = require("axios");

export function GetDealInvestors(investor_id=null) {
return axios
    .get(REACT_APP_API_BASE_URL + REACT_APP_DEAL_INVESTOR_URL, {params: {investor_id: investor_id}})
}

export function GetDealInvestor(deal_investor_id) {
return axios
    .get(REACT_APP_API_BASE_URL + REACT_APP_DEAL_INVESTOR_URL + "/" + deal_investor_id)
}

export function AddDealInvestor(deal_investor) {
    
    return axios
    .post(REACT_APP_API_BASE_URL + REACT_APP_DEAL_INVESTOR_URL + "/", deal_investor)
}

export function UpdateDealInvestor(deal_investor_id, deal_investor) {
    
    return axios
        .put(REACT_APP_API_BASE_URL + REACT_APP_DEAL_INVESTOR_URL+"/"+deal_investor_id, deal_investor)
}

export function DeleteDealInvestor(deal_investor_id) {
    
    return axios
    .delete(REACT_APP_API_BASE_URL + REACT_APP_DEAL_INVESTOR_URL+"/"+deal_investor_id)
}