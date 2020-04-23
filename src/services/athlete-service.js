import axios from 'axios';

const API_URL = 'http://localhost:8080/';

class AthleteService {
  getAllAthletes() {
    return axios.get(API_URL + 'athletes');
  }

  getAthleteById(id) {
    return axios.get(API_URL + 'athleteDetails?athleteId='+id);
  }

  getAllClubs() {
    return axios.get(API_URL + 'clubs');
  }
}

export default new AthleteService();