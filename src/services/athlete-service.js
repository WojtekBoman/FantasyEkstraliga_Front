import axios from 'axios';

const API_URL = 'https://fantasy-ekstraliga.herokuapp.com/';

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