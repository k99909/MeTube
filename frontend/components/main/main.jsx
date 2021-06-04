import Header from '../header/header';
import VideoIndexContainer from '../videos/video_index_container';
import SidebarContainer from '../sidebar/sidebar_container'
import React from 'react';
import { Container } from 'react-bootstrap'

const Main = () => (
    <div>
        <Header/>
        <div className="app-container">
        <SidebarContainer/>
        <Container fluid className="app-main">
        <VideoIndexContainer/>
        </Container>
        </div>
    </div>
)

export default Main;