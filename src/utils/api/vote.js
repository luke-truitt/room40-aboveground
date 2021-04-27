const {
    REACT_APP_API_BASE_URL,
    REACT_APP_VOTE_URL,
  } = process.env;

const axios = require("axios");

export function GetVotes(deal_id=null) {
    axios
        .get(REACT_APP_API_BASE_URL + REACT_APP_VOTE_URL + "/" , {params: {deal_id: deal_id}})
        .then(function (response) {
        console.log(response);
        })
        .catch(function (error) {
        console.log(error);
        });
}

export function GetVote(vote_id) {
axios
    .get(REACT_APP_API_BASE_URL + REACT_APP_VOTE_URL + "/" + vote_id)
    .then(function (response) {
        console.log(response);
    })
    .catch(function (error) {
        console.log(error);
    });
}

export function AddVote(vote) {
    // vote = {'team': 0, 'team_notes': '', 'market': 0, 'market_notes': '', 'product': 0, 'product_notes': '', 'name': '', 'stage': '', 'deal_id': 0}
    axios
    .post(REACT_APP_API_BASE_URL + REACT_APP_VOTE_URL + "/", vote)
    .then(function (response) {
        console.log(response);
    })
    .catch(function (error) {
        console.log(error);
    });
}

export function UpdateVote(vote_id, vote) {
    // vote = {'team': 0, 'team_notes': '', 'market': 0, 'market_notes': '', 'product': 0, 'product_notes': '', 'name': '', 'stage': '', 'deal_id': 0}
    axios
        .put(REACT_APP_API_BASE_URL + REACT_APP_VOTE_URL+"/"+vote_id, vote)
        .then(function (response) {
            console.log(response);
        })
        .catch(function (error) {
            console.log(error);
        });
}

export function DeleteVote(vote_id) {
    // vote = {'team': 0, 'team_notes': '', 'market': 0, 'market_notes': '', 'product': 0, 'product_notes': '', 'name': '', 'stage': '', 'deal_id': 0}
    axios
    .delete(REACT_APP_API_BASE_URL + REACT_APP_VOTE_URL+"/"+vote_id)
    .then(function (response) {
        console.log(response);
    })
    .catch(function (error) {
        console.log(error);
    });
}