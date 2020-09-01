import axios from "axios";
import Cookies from "js-cookie";

import {BONITA_URL} from "./constants";

const bonitaRequest = (url) => {
    return axios.get(`${BONITA_URL}/bonita/${url}`, {
        headers: {
            'X-Bonita-API-Token': Cookies.get("X-Bonita-API-Token")
        },
        withCredentials: true,
    }).then(res => res.data);
};

export default bonitaRequest;