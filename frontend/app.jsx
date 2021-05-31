import React from 'react';
import { Route } from 'react-router-dom';
import VideoIndexContainer from './videos/video_index_container';

export default () => (
    <div>
        <Route path="/" component={VideoIndexContainer}/>
    </div>
)