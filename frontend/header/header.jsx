import React from 'react';
import GreetingContainer from './greeting_container';
import { Link } from 'react-router-dom';

class Header extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <header className="header">
                <Link to="/" className="header-link">
                    <h2>MeTube</h2>
                </Link>
                <GreetingContainer />
            </header>
        )
    }
}

export default Header;