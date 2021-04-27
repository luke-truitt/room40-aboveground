const {
    REACT_APP_API_BASE_URL,
    REACT_APP_EVENTS_URL,
  } = process.env;

const axios = require("axios");

export function GetEvents(deal_id=null, week=null) {
    return axios.get(REACT_APP_API_BASE_URL + REACT_APP_EVENTS_URL, { params: {deal_id: deal_id, week: week }})
}

export function GetEvent(event_id) {
return axios.get(REACT_APP_API_BASE_URL + REACT_APP_EVENTS_URL + "/" + event_id)
}

export function AddEvent(event) {
    
    return axios
    .post(REACT_APP_API_BASE_URL + REACT_APP_EVENTS_URL + "/", event)
    
}

export function UpdateEvent(event_id, event) {
    
    return axios
        .put(REACT_APP_API_BASE_URL + REACT_APP_EVENTS_URL+"/"+event_id, event)
        
}

export function DeleteEvent(event_id) {
    
    return axios
    .delete(REACT_APP_API_BASE_URL + REACT_APP_EVENTS_URL+"/"+event_id)
   
}