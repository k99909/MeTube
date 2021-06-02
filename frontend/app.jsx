import React from 'react';
import { Route } from 'react-router-dom';
import VideoIndexContainer from './videos/video_index_container';
import { AuthRoute, ProtectedRoute } from './utils/route_utils';
import SignupContainer from './session/signup_form_container';
import LoginFormContainer from './session/login_form_container';
import HeaderContainer from './header/header_container';
import { Link } from 'react-router-dom';

export default () => (
    <div>
        <header>
            <Link to="/" className="header-link">
                <h1>MeTube</h1>
            </Link>
            <HeaderContainer />
        </header>
        <AuthRoute exact path="/signup" component={SignupContainer}/>
        <AuthRoute exact path="/login" component={LoginFormContainer}/>
        <Route exact path="/" component={VideoIndexContainer}/>
    </div>
)