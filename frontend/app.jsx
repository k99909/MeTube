import React from 'react';
import { Route } from 'react-router-dom';
import VideoIndexContainer from './videos/video_index_container';
import { AuthRoute, ProtectedRoute } from './utils/route_utils';
import SignupContainer from './session/signup_form_container';
import LoginFormContainer from './session/login_form_container';
import Header from './header/header';
import { Link, Redirect, Switch } from 'react-router-dom';
import Main from './main/main';

export default () => (
    <div className="main-div">
        <Switch>
        <AuthRoute exact path="/signup" component={SignupContainer}/>
        <AuthRoute exact path="/login" component={LoginFormContainer}/>
        <Route exact path="/" component={Main}/>
        <Route render={() => <Redirect to={{ pathname: "" }} />} />
        </Switch>
    </div>
)