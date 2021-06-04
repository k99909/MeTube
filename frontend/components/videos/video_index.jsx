import React from 'react';
import { Container, Row } from 'react-bootstrap';
import { VideoItem } from './video_item';

class VideoIndex extends React.Component {
    render() {
        
        return (
            <Container>
                <Row>
                    {[...new Array(20)].map(() => (
                        <VideoItem />
                    ))}
                </Row>
            </Container>
        )
    }
}


export default VideoIndex;