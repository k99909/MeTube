import React from 'react';
import {
    MdSubscriptions,
    MdExitToApp,
    MdHistory,
    MdHome,
} from 'react-icons/md'
import { Link } from 'react-router-dom';

const Sidebar = ({currentUser, logout}) => {
    return (
        <nav className="sidebar" id="sidebar-menu">
            <li>
                <MdHome size={23} />
                <span>Home</span>
            </li>
            <li>
                <MdSubscriptions size={23} />
                <span>Subscriptions</span>
            </li>
            <li>
                <MdHistory size={23} />
                <span>History</span>
            </li>
            { currentUser ? 
                <li onClick={logout}>
                    <MdExitToApp size={23} />
                    <span>Log Out</span>
                </li> : <li>
                    <Link to="/login"><MdExitToApp size={23} /></Link>
                    <span>Sign In</span>
                </li> }
        </nav>
    )
}

export default Sidebar;