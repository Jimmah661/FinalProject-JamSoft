import axios from 'axios';

export default {
  reportAll: function() {
    return axios.get('/api/incident/');
  },
  // Form my flexable report API I should use a POST request rather than a Get as I can send an object and then respond with the correct data
  specificReport: function() {
    return axios.get('/api/incident/show/')
  }
}