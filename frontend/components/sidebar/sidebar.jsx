import React from 'react';
import {
    MdSubscriptions,
    MdExitToApp,
    MdHistory,
    MdHome,
} from 'react-icons/md';
import {
    AiFillGithub,
    AiFillLinkedin
} from 'react-icons/ai';
import { FaAngellist } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Sidebar = ({currentUser, logout, homePage}) => {
    return (
        <nav className={homePage ? "sidebar" : "sidebar hidden"} id="sidebar-menu">
            <a href="https://github.com/k99909"><li>
                <AiFillGithub size={23} />
                <span>Github</span>
            </li></a>
            <a href="https://www.linkedin.com/in/kaz-debear-66a6b8172/"><li>
                <AiFillLinkedin size={23} />
                <span>LinkedIn</span>
            </li></a>
            <a href="https://angel.co/u/kazuki-debear"><li>
                <FaAngellist size={23} />
                <span>Angel List</span>
            </li></a>
            { currentUser ? 
                <li onClick={logout}>
                    <MdExitToApp size={23} />
                    <span>Log Out</span>
                </li> : <li>
                    <Link to="/login"><MdExitToApp size={23} /></Link>
                    <span><Link to="/login">Sign In</Link></span>
                </li> }
        </nav>
    )
}

export default Sidebar;