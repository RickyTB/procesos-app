import React from 'react';

import SideMenu from "../SideMenu/SideMenu";

const AccountLayout = ({children}) => {
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