import axios from "axios";

import {BONITA_URL} from "./constants";

export const findProcess = async (name, apiToken, headers = {}) => {
    const {data: processes} = await axios.get(`${BONITA_URL}/bonita/API/bpm/process?c=10&p=0`, {
        headers: {
            'X-Bonita-API-Token': apiToken,
            ...headers
        },
        withCredentials: true,
    });
    return processes.find(p => p.name === name);
}