const {
    REACT_APP_API_BASE_URL,
    REACT_APP_ACTIVITIES_URL,
  } = process.env;

const axios = require("axios");

export function GetActivities(company_id=null,priority=null,title=null,due_date=null) {
axios
    .get(REACT_APP_API_BASE_URL + REACT_APP_ACTIVITIES_URL, { params: {company_id: company_id, priority: priority, title: title, due_date: due_date} })
    .then(function (response) {
    console.log(response);
    })
    .catch(function (error) {
    console.log(error);
    });
}

export function GetActivity(activity_id) {
axios
    .get(REACT_APP_API_BASE_URL + REACT_APP_ACTIVITIES_URL + "/" + activity_id)
    .then(function (response) {
    console.log(response);
    })
    .catch(function (error) {
    console.log(error);
    });
}

export function AddActivity(activity) {
    
    axios
    .post(REACT_APP_API_BASE_URL + REACT_APP_ACTIVITIES_URL + "/", activity)
    .then(function (response) {
        console.log(response);
    })
    .catch(function (error) {
        console.log(error);
    });
}

export function UpdateActivity(activity_id, activity) {
    
    axios
        .put(REACT_APP_API_BASE_URL + REACT_APP_ACTIVITIES_URL+"/"+activity_id, activity)
        .then(function (response) {
            console.log(response);
        })
        .catch(function (error) {
            console.log(error);
        });
}

export function DeleteActivity(activity_id) {
    
    axios
    .delete(REACT_APP_API_BASE_URL + REACT_APP_ACTIVITIES_URL+"/"+activity_id)
    .then(function (response) {
        console.log(response);
    })
    .catch(function (error) {
        console.log(error);
    });
}