export default function authHeader() {
    const user = JSON.parse(localStorage.getItem('player'));

    if(user && user.token) {
        return {Authorization: 'Bearer '+user.token,
        'Access-Control-Allow-Methods': 'POST, GET, OPTIONS'};
    }else{
        return {};
    }
}