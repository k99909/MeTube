import React from 'react';
import GreetingContainer from './greeting_container';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faBars } from '@fortawesome/fontawesome-free-solid';

class Header extends React.Component {
    constructor(props) {
        super(props)
        this.sidebarClick = this.sidebarClick.bind(this)
    }

    sidebarClick = (e) => {
        e.preventDefault();
        document.getElementById("sidebar-menu").classList.toggle("show");
    }

    render() {
        return (
            <header className="header">
                <FontAwesomeIcon icon={faBars} className="sidebar-icon" onClick={this.sidebarClick}/>

                <Link to="/" className="header-link">
                    <img src='https://active-storage-metube-dev.s3.us-west-1.amazonaws.com/logo.png' alt="logo" className="logo" />
                </Link>

                <form className="search-bar">
                    <input type="text" placeholder="Search" name="s"/>
                    <button className="search-button" type='submit'>
                        <FontAwesomeIcon icon={faSearch}/>
                        <div className="search-dropdown-content">
                            <span>Search</span>
                        </div>
                    </button>
                </form>

                <GreetingContainer />
            </header>
        )
    }
}

export default Header;