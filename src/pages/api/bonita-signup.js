import axios from 'axios';
import qs from 'qs';
import cookie from 'cookie';

import {BONITA_URL} from "../../utils/constants";
import {findProcess} from "../../utils/common-requests";

export default async (req, res) => {
    if (req.method !== "POST") return res.status(404).json({error: {message: "Route not found."}});
    const {email, password, firstName, lastName} = req.body;

    const userPayload = {
        "userName": email,
        "password": password,
        "password_confirm": password,
        "icon": "",
        "firstname": firstName,
        "lastname": lastName,
        "title": "Sr",
        "job_title": "Vendedor",
        "enabled": "true",
    };

    try {
        const bonitaToken = await bonitaAuth();
        const {data: user} = await axios.post(`${BONITA_URL}/bonita/API/identity/user`, userPayload, {
            withCredentials: true,
            headers: {
                "X-Bonita-API-Token": bonitaToken["X-Bonita-API-Token"],
                Cookie: bonitaToken.cookie,
            }
        });
        const membershipPayload = {"role_id": "201", "group_id": "201", "user_id": user.id};
        const {data: membership} = await axios.post(`${BONITA_URL}/bonita/API/identity/membership`, membershipPayload, {
            withCredentials: true,
            headers: {
                "X-Bonita-API-Token": bonitaToken["X-Bonita-API-Token"],
                Cookie: bonitaToken.cookie,
            }
        });
        const publishProcess = await findProcess("CompraDeConsola", bonitaToken["X-Bonita-API-Token"], {Cookie: bonitaToken.cookie});
        const actorPayload = {"actor_id": publishProcess.actorinitiatorid, "user_id": user.id};
        const {data: actor} = await axios.post(`${BONITA_URL}/bonita/API/bpm/actorMember`, actorPayload, {
            withCredentials: true,
            headers: {
                "X-Bonita-API-Token": bonitaToken["X-Bonita-API-Token"],
                Cookie: bonitaToken.cookie,
            }
        });
        const memberPayload = {"profile_id": "1", "member_type": "USER", "user_id": user.id};
        const {data: member} = await axios.post(`${BONITA_URL}/bonita/API/portal/profileMember/`, memberPayload, {
            withCredentials: true,
            headers: {
                "X-Bonita-API-Token": bonitaToken["X-Bonita-API-Token"],
                Cookie: bonitaToken.cookie,
            }
        });
        console.log(user, membership, actor, member);
        res.status(200).json(user);
    } catch (e) {
        console.log(e.response);
        return res.status(400).json({error: e.response.data});
    }
}

const bonitaAuth = async () => {
    const adminCredentials = qs.stringify({
        "username": process.env.BONITA_ADMIN_USER,
        "password": process.env.BONITA_ADMIN_PASSWORD,
        "redirect": "false",
    });
    const response = await axios.post(`${BONITA_URL}/bonita/loginservice`, adminCredentials, {withCredentials: true});
    return {cookie: response.headers["set-cookie"].join(";"), ...cookie.parse(response.headers["set-cookie"].join(";"))};
};
