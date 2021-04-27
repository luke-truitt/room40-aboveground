const {
    REACT_APP_API_BASE_URL,
    REACT_APP_USER_URL,
  } = process.env;

const axios = require("axios");

export function GetUsers(company_id=null) {
axios
    .get(REACT_APP_API_BASE_URL + REACT_APP_USER_URL, {params: {company_id: company_id}})
    .then(function (response) {
    console.log(response);
    })
    .catch(function (error) {
    console.log(error);
    });
}

export function GetUser(user_id) {
axios
    .get(REACT_APP_API_BASE_URL + REACT_APP_USER_URL + "/" + user_id)
    .then(function (response) {
    console.log(response);
    })
    .catch(function (error) {
    console.log(error);
    });
}

export function AddUser(user) {
    
    axios
    .post(REACT_APP_API_BASE_URL + REACT_APP_USER_URL + "/", user)
    .then(function (response) {
        console.log(response);
    })
    .catch(function (error) {
        console.log(error);
    });
}

export function UpdateUser(user_id, user) {
    
    axios
        .put(REACT_APP_API_BASE_URL + REACT_APP_USER_URL+"/"+user_id, user)
        .then(function (response) {
            console.log(response);
        })
        .catch(function (error) {
            console.log(error);
        });
}

export function DeleteUser(user_id) {
    
    axios
    .delete(REACT_APP_API_BASE_URL + REACT_APP_USER_URL+"/"+user_id)
    .then(function (response) {
        console.log(response);
    })
    .catch(function (error) {
        console.log(error);
    });
}