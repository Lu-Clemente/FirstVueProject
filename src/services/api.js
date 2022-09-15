import axios from "axios";

const api = axios.create({
    baseURL: "https://api.github.com/users/lu-clemente",
    timeout: 10000
})

export default api;