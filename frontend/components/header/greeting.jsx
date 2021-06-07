import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSignOutAlt, faHome } from '@fortawesome/fontawesome-free-solid';
import { BiVideoPlus } from "react-icons/bi";



const Greeting = ({ currentUser, logout }) => {
    const sessionLinks = () => (
        <nav className="login-signup" id="signin-topright">
            <Link to="/login">SIGN IN</Link>
        </nav>
    );

    const dropdownClick = (e) => {
        e.preventDefault();
        document.getElementById("user-dropdown").classList.toggle("show");
    }

    const personalGreeting = () => (
        <hgroup className="header-group">
            <div className="create-video">
                <div className="create-dropdown">
                    <Link to="/create"><BiVideoPlus size={30} /></Link>
                    <div className="create-dropdown-content">
                        <span>Create</span>
                    </div>
                </div>
            </div>
            <div className="dropdown">
                <button onClick={dropdownClick} className="dropbtn">
                    {currentUser.username.slice(0, 1).toUpperCase()}
                </button>
                <div id="user-dropdown" className="dropdown-content">
                    <h2>Hello {currentUser.username}</h2>
                    <Link to="/" className="dropdown-item"><p><FontAwesomeIcon icon={faHome} /></p><p>Home</p></Link>
                    <Link onClick={logout} className="dropdown-item"><p><FontAwesomeIcon icon={faSignOutAlt} /></p><p>Sign Out</p></Link>
                </div>
            </div>
            {
                window.onclick = function (event) {
                    if (!event.target.matches('.dropbtn')) {
                        var dropdowns = document.getElementsByClassName("dropdown-content");
                        var i;
                        for (i = 0; i < dropdowns.length; i++) {
                            var openDropdown = dropdowns[i];
                            if (openDropdown.classList.contains('show')) {
                                openDropdown.classList.remove('show');
                            }
                        }
                    }
                }
            }
        </hgroup>
    );

    return currentUser ? personalGreeting() : sessionLinks();
};


export default Greeting;