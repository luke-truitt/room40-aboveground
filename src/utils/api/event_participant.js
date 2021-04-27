import { event_participant } from "./api";

const {
    REACT_APP_API_BASE_URL,
    REACT_APP_EVENT_PARTICIPANTS_URL,
  } = process.env;

const axios = require("axios");

export function GetEventParticipants() {
axios
    .get(REACT_APP_API_BASE_URL + REACT_APP_EVENT_PARTICIPANTS_URL)
    .then(function (response) {
    console.log(response);
    })
    .catch(function (error) {
    console.log(error);
    });
}

export function GetEventParticipant(event_participant_id) {
axios
    .get(REACT_APP_API_BASE_URL + REACT_APP_EVENT_PARTICIPANTS_URL + "/" + event_participant_id)
    .then(function (response) {
    console.log(response);
    })
    .catch(function (error) {
    console.log(error);
    });
}

export function AddHighlight(event_participant) {
    
    axios
    .post(REACT_APP_API_BASE_URL + REACT_APP_EVENT_PARTICIPANTS_URL + "/", event_participant)
    .then(function (response) {
        console.log(response);
    })
    .catch(function (error) {
        console.log(error);
    });
}

export function UpdateHighlight(event_participant_id, event_participant) {
    
    axios
        .put(REACT_APP_API_BASE_URL + REACT_APP_EVENT_PARTICIPANTS_URL+"/"+event_participant_id, event_participant)
        .then(function (response) {
            console.log(response);
        })
        .catch(function (error) {
            console.log(error);
        });
}

export function DeleteEventParticipant(event_participant_id) {
    
    axios
    .delete(REACT_APP_API_BASE_URL + REACT_APP_EVENT_PARTICIPANTS_URL+"/"+event_participant_id)
    .then(function (response) {
        console.log(response);
    })
    .catch(function (error) {
        console.log(error);
    });
}