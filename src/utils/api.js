const {
    REACT_APP_API_BASE_URL,
    REACT_APP_USER_URL,
    REACT_APP_COMPANY_URL,
    REACT_APP_DEAL_URL,
    REACT_APP_DEAL_INVESTOR_URL,
    REACT_APP_ACTIVITIES_URL,
    REACT_APP_ASSESSMENTS_URL,
    REACT_APP_EVENTS_URL,
    REACT_APP_EVENT_PARTICIPANTS_URL,
    REACT_APP_HIGHLIGHTS_URL,
    REACT_APP_NOTES_URL,
    REACT_APP_USER_COMPANY_URL,
    REACT_APP_VOTE_URL,
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

  export function GetCompanies() {
    axios
      .get(REACT_APP_API_BASE_URL + REACT_APP_COMPANY_URL)
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  export function GetCompany(company_id) {
    axios
      .get(REACT_APP_API_BASE_URL + REACT_APP_COMPANY_URL + "/" + company_id)
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  export function GetDeals() {
    axios
      .get(REACT_APP_API_BASE_URL + REACT_APP_DEAL_URL)
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  export function GetDeal(deal_id) {
    axios
      .get(REACT_APP_API_BASE_URL + REACT_APP_DEAL_URL + "/" + deal_id)
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  export function GetDealInvestors() {
    axios
      .get(REACT_APP_API_BASE_URL + REACT_APP_DEAL_INVESTOR_URL)
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  export function GetDealInvestor(deal_investor_id) {
    axios
      .get(REACT_APP_API_BASE_URL + REACT_APP_DEAL_INVESTOR_URL + "/" + deal_investor_id)
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  }

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

  export function GetVotes(deal_id=null) {
    axios
      .get(REACT_APP_API_BASE_URL + REACT_APP_VOTE_URL, {params: {deal_id: deal_id}})
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