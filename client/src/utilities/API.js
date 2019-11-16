import axios from 'axios';

export default {
  // This one just reports on all documents in the Incident Collection
  reportAll: function() {
    return axios.get('/api/incident/');
  },
  // This one is a POST request that sends through a JSON file that contains the search requirements. 
  // This will be used to generate custom reports for the system
  search: function(searchTerms) {
    return axios.post('/api/incident/show/', searchTerms)
  },
  // Single incident search
  single: function(id) {
    return axios.get('/api/incident/' + id)
  },
  // Create new incident
  create: function(newIncident) {
    return axios.post('/api/incident/create/', newIncident)
  }
}