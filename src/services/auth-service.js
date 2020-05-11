import axios from 'axios';

const API_URL = "http://localhost:8080/api/auth/";

class AuthService {
    login(login, password) {
        return axios
            .post(API_URL + "signin",{
                login,
                password
            })
            .then(res =>{
                if (res.data.token) {
                    console.log("Wysyłam token !");
                    localStorage.setItem("player",JSON.stringify(res.data));
                }

                return res.data;
    
            });
    }

    logout() {
        localStorage.removeItem("player");
    }

    register(login,email,firstName,surname,password) {
        return axios.post(API_URL + "signup", {
            login,
            email,
            firstName,
            surname,
            password
        });
    }

    getCurrentUser() {
        return JSON.parse(localStorage.getItem("player"));
    }
}

export default new AuthService();

