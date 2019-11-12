import axios from 'axios';

export default {
  runReport: function() {
    return axios.get('/api/incident/');
  }
}