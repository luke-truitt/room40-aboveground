const {
    REACT_APP_API_BASE_URL,
    REACT_APP_ASSESSMENTS_URL,
  } = process.env;

const axios = require("axios");

export function GetAssessments(company_id=null) {
axios
    .get(REACT_APP_API_BASE_URL + REACT_APP_ASSESSMENTS_URL, { params: {company_id: company_id} })
    .then(function (response) {
    console.log(response);
    })
    .catch(function (error) {
    console.log(error);
    });
}

export function GetAssessment(assessment_id) {
axios
    .get(REACT_APP_API_BASE_URL + REACT_APP_ASSESSMENTS_URL + "/" + assessment_id)
    .then(function (response) {
    console.log(response);
    })
    .catch(function (error) {
    console.log(error);
    });
}

export function AddAssessment(assessment) {
    
    axios
    .post(REACT_APP_API_BASE_URL + REACT_APP_ASSESSMENTS_URL + "/", assessment)
    .then(function (response) {
        console.log(response);
    })
    .catch(function (error) {
        console.log(error);
    });
}

export function UpdateAssessment(assessment_id, assessment) {
    
    axios
        .put(REACT_APP_API_BASE_URL + REACT_APP_ASSESSMENTS_URL+"/"+assessment_id, assessment)
        .then(function (response) {
            console.log(response);
        })
        .catch(function (error) {
            console.log(error);
        });
}

export function DeleteAssessment(assessment_id) {
    
    axios
    .delete(REACT_APP_API_BASE_URL + REACT_APP_ASSESSMENTS_URL+"/"+assessment_id)
    .then(function (response) {
        console.log(response);
    })
    .catch(function (error) {
        console.log(error);
    });
}