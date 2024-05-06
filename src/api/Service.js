import axios from "axios"

const login = (email, password) => {
    return axios.post("http://camenryder.xyz/auth/login", {email, password});
}

export {login}