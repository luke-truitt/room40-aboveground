const {
    REACT_APP_API_BASE_URL,
    REACT_APP_USER_COMPANY_URL,
  } = process.env;

const axios = require("axios");

export function GetUserCompanies() {
axios
    .get(REACT_APP_API_BASE_URL + REACT_APP_USER_COMPANY_URL)
    .then(function (response) {
    console.log(response);
    })
    .catch(function (error) {
    console.log(error);
    });
}

export function GetUserCompany(user_company_id) {
axios
    .get(REACT_APP_API_BASE_URL + REACT_APP_USER_COMPANY_URL + "/" + user_company_id)
    .then(function (response) {
    console.log(response);
    })
    .catch(function (error) {
    console.log(error);
    });
}

export function AddUserCompany(user_company) {
    
    axios
    .post(REACT_APP_API_BASE_URL + REACT_APP_USER_COMPANY_URL + "/", user_company)
    .then(function (response) {
        console.log(response);
    })
    .catch(function (error) {
        console.log(error);
    });
}

export function UpdateUserCompany(user_company_id, user_company) {
    
    axios
        .put(REACT_APP_API_BASE_URL + REACT_APP_USER_COMPANY_URL+"/"+user_company_id, user_company)
        .then(function (response) {
            console.log(response);
        })
        .catch(function (error) {
            console.log(error);
        });
}

export function DeleteUserCompany(user_company_id) {
    
    axios
    .delete(REACT_APP_API_BASE_URL + REACT_APP_USER_COMPANY_URL+"/"+user_company_id)
    .then(function (response) {
        console.log(response);
    })
    .catch(function (error) {
        console.log(error);
    });
}