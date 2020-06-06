import axios from 'axios';
import authHeader from './auth-header';

const API_URL = "https://fantasy-ekstraliga.herokuapp.com/";

class TeamService {
    createTeam(teamName) {

        console.log(authHeader())

        return axios.post(API_URL + `createTeam?teamName=RAZDWATRZY`,{ headers: authHeader()})
        
    }
}

export default new TeamService();