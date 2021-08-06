import React from 'react';
import GreetingContainer from './greeting_container';
import { Link, Redirect, withRouter } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faBars } from '@fortawesome/fontawesome-free-solid';

class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            search: ""
        };
        this.updateSearch = this.updateSearch.bind(this);
        this.sidebarClick = this.sidebarClick.bind(this);
        this.search = this.search.bind(this);
    }

    sidebarClick = (e) => {
        e.preventDefault();
        document.getElementById("sidebar-menu").classList.toggle("show");
    }

    search(e) {
        e.preventDefault();
        window.location.href=`?s=${this.state.search}#/`;
    }

    updateSearch(e) {
        this.setState({ search: e.target.value });
    }

    render() {
        return (
            <header className="header">
                <FontAwesomeIcon icon={faBars} className="sidebar-icon" onClick={this.sidebarClick}/>

                <a href="/#/" className="header-link" replace>
                    <img src='https://active-storage-metube-dev.s3.us-west-1.amazonaws.com/logo.png' alt="logo" className="logo"/>
                </a>

                <form className="search-bar" onSubmit={this.search}>
                    <input type="text" className="search-bar-input" placeholder="Search" name="s" onChange={this.updateSearch}/>
                    <button className="search-button" type="submit">
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

export default withRouter(Header);