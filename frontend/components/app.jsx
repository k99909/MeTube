import React from 'react';
import { Route, withRouter } from 'react-router-dom';
import VideoIndexContainer from './videos/video_index_container';
import { AuthRoute, ProtectedRoute } from '../utils/route_utils';
import SignupContainer from './session/signup_form_container';
import LoginFormContainer from './session/login_form_container';
import Header from './header/header';
import { Link, Redirect, Switch } from 'react-router-dom';
import SingleVideoContainer from './videos/single_video_container';
import Main from './main/main';
import VideoFormContainer from './videos/video_form_container';
import Errors from './errors_page'

const App = props => (
        <div className="main-div">
            { (props.location.pathname !== '/login' && props.location.pathname !== '/signup') ? <Header/> : null
            }
            {console.log(props.location.pathname)}
            <Switch>
            <AuthRoute exact path="/signup" component={SignupContainer}/>
            <AuthRoute exact path="/login" component={LoginFormContainer}/>
            <Route exact path="/create" render={(props) => <VideoFormContainer {...props} action='Upload Video'/>}/>
            <Route exact path="/" component={Main}/>
            <Route path="/watch/:videoId" component={SingleVideoContainer}/>
            <Route exact path="/404" component={Errors}/>
            <Route render={() => <Redirect to={{ pathname: "" }} />} />
            </Switch>
        </div>
)

export default withRouter(App);