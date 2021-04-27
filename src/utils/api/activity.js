const {
    REACT_APP_API_BASE_URL,
    REACT_APP_ACTIVITIES_URL,
  } = process.env;

const axios = require("axios");

export function GetActivities(company_id=null,priority=null,title=null,due_date=null) {
return axios.get(REACT_APP_API_BASE_URL + REACT_APP_ACTIVITIES_URL, { params: {company_id: company_id, priority: priority, title: title, due_date: due_date} })
    
}

export function GetActivity(activity_id) {
return axios.get(REACT_APP_API_BASE_URL + REACT_APP_ACTIVITIES_URL + "/" + activity_id)
    
}

export function AddActivity(activity) {
    
    return axios.post(REACT_APP_API_BASE_URL + REACT_APP_ACTIVITIES_URL + "/", activity)
    
}

export function UpdateActivity(activity_id, activity) {
    
    return axios.put(REACT_APP_API_BASE_URL + REACT_APP_ACTIVITIES_URL+"/"+activity_id, activity)
        
}

export function DeleteActivity(activity_id) {
    
    return axios.delete(REACT_APP_API_BASE_URL + REACT_APP_ACTIVITIES_URL+"/"+activity_id)
    
}