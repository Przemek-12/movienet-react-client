import axios from 'axios';

class AuthExecutor {

    static async login(loginAndPasswordBase64) {
        const url = process.env.REACT_APP_MOVIE_NET_BASE_URL + process.env.REACT_APP_ENDPOINT_LOGIN;
        try {
            return axios({
                method: 'post',
                url: url,
                data: {
                    loginCredentials: loginAndPasswordBase64
                },
                headers: { 'Content-Type': 'application/json' }
            });
        }catch(error){
            throw new Error("error")
        }
    }

    static async register(loginAndPasswordBase64, email) {
        const url = process.env.REACT_APP_MOVIE_NET_BASE_URL + process.env.REACT_APP_ENDPOINT_REGISTER;
        try {
            return axios({
                method: 'post',
                url: url,
                data: {
                    email: email,
                    loginCredentials:{
                        loginCredentials: loginAndPasswordBase64
                    }  
                },
                headers: { 'Content-Type': 'application/json' }
            });
        }catch(error){
            throw new Error("error")
        }
    }
}

export default AuthExecutor;