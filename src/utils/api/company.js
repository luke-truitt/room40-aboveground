const {
    REACT_APP_API_BASE_URL,
    REACT_APP_COMPANY_URL,
  } = process.env;

const axios = require("axios");

export function GetCompanies(ids=null, investor_id=null) {
return axios
    .get(REACT_APP_API_BASE_URL + REACT_APP_COMPANY_URL, {params: {ids: ids, investor_id: investor_id}})
}

export function GetCompany(company_id) {
return axios
    .get(REACT_APP_API_BASE_URL + REACT_APP_COMPANY_URL + "/" + company_id)
    
}

export function AddCompany(company) {
    
    axios
    .post(REACT_APP_API_BASE_URL + REACT_APP_COMPANY_URL + "/", company)
    .then(function (response) {
        console.log(response);
    })
    .catch(function (error) {
        console.log(error);
    });
}

export function UpdateCompany(company_id, company) {
    
    axios
        .put(REACT_APP_API_BASE_URL + REACT_APP_COMPANY_URL+"/"+company_id, company)
        .then(function (response) {
            console.log(response);
        })
        .catch(function (error) {
            console.log(error);
        });
}

export function DeleteCompany(company_id) {
    
    axios
    .delete(REACT_APP_API_BASE_URL + REACT_APP_COMPANY_URL+"/"+company_id)
    .then(function (response) {
        console.log(response);
    })
    .catch(function (error) {
        console.log(error);
    });
}