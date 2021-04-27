const {
    REACT_APP_API_BASE_URL,
    REACT_APP_EVENTS_URL,
  } = process.env;

const axios = require("axios");

export function GetEvents(deal_id=null, week=null) {
axios
    .get(REACT_APP_API_BASE_URL + REACT_APP_EVENTS_URL, { params: {deal_id: deal_id, week: week }})
    .then(function (response) {
    console.log(response);
    })
    .catch(function (error) {
    console.log(error);
    });
}

export function GetEvent(event_id) {
axios
    .get(REACT_APP_API_BASE_URL + REACT_APP_EVENTS_URL + "/" + event_id)
    .then(function (response) {
    console.log(response);
    })
    .catch(function (error) {
    console.log(error);
    });
}

export function AddEvent(event) {
    
    axios
    .post(REACT_APP_API_BASE_URL + REACT_APP_EVENTS_URL + "/", event)
    .then(function (response) {
        console.log(response);
    })
    .catch(function (error) {
        console.log(error);
    });
}

export function UpdateEvent(event_id, event) {
    
    axios
        .put(REACT_APP_API_BASE_URL + REACT_APP_EVENTS_URL+"/"+event_id, event)
        .then(function (response) {
            console.log(response);
        })
        .catch(function (error) {
            console.log(error);
        });
}

export function DeleteEvent(event_id) {
    
    axios
    .delete(REACT_APP_API_BASE_URL + REACT_APP_EVENTS_URL+"/"+event_id)
    .then(function (response) {
        console.log(response);
    })
    .catch(function (error) {
        console.log(error);
    });
}