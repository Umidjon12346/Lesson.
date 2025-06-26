import axios from "axios";

const axiosIstance = axios.create({
    baseURL: import.meta.env.VITE_BASE_URL
})

export default axiosIstance