import React from 'react';

import SideMenu from "../SideMenu/SideMenu";
import useAuthProtection from "../../hooks/use-auth-protection";

const AccountLayout = ({children}) => {
    useAuthProtection(true);
    return (
        <div className="columns">
            <div className="column is-narrow">
                <SideMenu/>
            </div>
            <div className="column">
                <div className="container">
                    {children}
                </div>
            </div>
        </div>
    );
};

export default AccountLayout;