const {
    REACT_APP_API_BASE_URL,
    REACT_APP_NOTES_URL,
  } = process.env;

const axios = require('axios');

export function GetNotes(deal_id=null,search_query=null,keyword_search=null,thesis=null) {
axios
    .get(REACT_APP_API_BASE_URL + REACT_APP_NOTES_URL, {params: {deal_id: deal_id, search_query: search_query, keyword_search: keyword_search, thesis: thesis}})
    .then(function (response) {
    console.log(response);
    })
    .catch(function (error) {
    console.log(error);
    });
}

export function GetNote(note_id) {
axios
    .get(REACT_APP_API_BASE_URL + REACT_APP_NOTES_URL + "/" + note_id)
    .then(function (response) {
    console.log(response);
    })
    .catch(function (error) {
    console.log(error);
    });
}

export function AddNote(note) {
    
    axios
    .post(REACT_APP_API_BASE_URL + REACT_APP_NOTES_URL + "/", note)
    .then(function (response) {
        console.log(response);
    })
    .catch(function (error) {
        console.log(error);
    });
}

export function UpdateNote(note_id, note) {
    
    axios
        .put(REACT_APP_API_BASE_URL + REACT_APP_NOTES_URL+"/"+note_id, note)
        .then(function (response) {
            console.log(response);
        })
        .catch(function (error) {
            console.log(error);
        });
}

export function DeleteNote(note_id) {
    
    axios
    .delete(REACT_APP_API_BASE_URL + REACT_APP_NOTES_URL+"/"+note_id)
    .then(function (response) {
        console.log(response);
    })
    .catch(function (error) {
        console.log(error);
    });
}