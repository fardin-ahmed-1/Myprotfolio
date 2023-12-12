import axios from "axios";
const axiosSecure= axios.create({
    baseURL:import.meta.env.VITE_AXIOX_BAGEURL,
    // withCredentials: true
})
export default axiosSecure