import axios from "axios";
export default axios.create({
    baseURL: `http://185.51.76.204:9091/`,
    headers: {
        "Content-type": "application/json"
    }
});
