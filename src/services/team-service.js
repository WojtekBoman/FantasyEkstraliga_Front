import axios from 'axios';
import authHeader from './auth-header';

const API_URL = "http://localhost:8080/";

class TeamService {
    createTeam(teamName) {

        console.log(authHeader())

        return axios.post(API_URL + `createTeam?teamName=RAZDWATRZY`,{ headers: authHeader()})
        
    }
}

export default new TeamService();