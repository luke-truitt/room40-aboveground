const {
    REACT_APP_API_BASE_URL,
    REACT_APP_HIGHLIGHTS_URL,
  } = process.env;
  
const axios = require("axios");

export function GetHighlights(company_id=null) {
axios
    .get(REACT_APP_API_BASE_URL + REACT_APP_HIGHLIGHTS_URL, {params: {company_id: company_id}})
    .then(function (response) {
    console.log(response);
    })
    .catch(function (error) {
    console.log(error);
    });
}

export function GetHighlight(highlight_id) {
axios
    .get(REACT_APP_API_BASE_URL + REACT_APP_HIGHLIGHTS_URL + "/" + highlight_id)
    .then(function (response) {
    console.log(response);
    })
    .catch(function (error) {
    console.log(error);
    });
}

export function AddHighlight(highlight) {
    
    axios
    .post(REACT_APP_API_BASE_URL + REACT_APP_HIGHLIGHTS_URL + "/", highlight)
    .then(function (response) {
        console.log(response);
    })
    .catch(function (error) {
        console.log(error);
    });
}

export function UpdateHighlight(highlight_id, highlight) {
    
    axios
        .put(REACT_APP_API_BASE_URL + REACT_APP_HIGHLIGHTS_URL+"/"+highlight_id, highlight)
        .then(function (response) {
            console.log(response);
        })
        .catch(function (error) {
            console.log(error);
        });
}

export function DeleteHighlight(highlight_id) {
    
    axios
    .delete(REACT_APP_API_BASE_URL + REACT_APP_HIGHLIGHTS_URL+"/"+highlight_id)
    .then(function (response) {
        console.log(response);
    })
    .catch(function (error) {
        console.log(error);
    });
}