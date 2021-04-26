import React from 'react';
import UserpageNavbar from './UserpageNavbar';
import UserpageMainbar from './UserpageMainbar';
import UserpageSidebar from './UserpageSidebar';

import './User.css'
export default function User() {

    return (
        <div className="container userpage">
            <UserpageNavbar />
            <UserpageMainbar />
            <UserpageSidebar />
        </div>
        );
    
}
