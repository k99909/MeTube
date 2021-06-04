import React from 'react';
import { Container, Row } from 'react-bootstrap';
import { VideoItem } from './video_item';

class VideoIndex extends React.Component {
    render() {
        
        return (
            // <Container>
                <div className="video-index-grid">
                    {[...new Array(12)].map(() => (
                        <VideoItem />
                    ))}
                </div>
            // </Container>
        )
    }
}


export default VideoIndex;