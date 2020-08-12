import {useEffect} from "react";
import {useRouter} from "next/router";

import {useUser} from "../context/userContext";

const useAuthProtection = (authRequired, redirectTo = "/") => {
    const {loadingUser, user} = useUser();
    const router = useRouter();

    useEffect(() => {
        if (loadingUser) return;
        if ((authRequired && !user) || (!authRequired && user)) {
            router.push(redirectTo);
        }
    }, [authRequired, loadingUser, user]);
};

export default useAuthProtection;