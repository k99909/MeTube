import React from 'react';
import { Container, Row } from 'react-bootstrap';
import VideoItemContainer from './video_item_container';

class VideoIndex extends React.Component {
    constructor(props) {
        super(props)
        // this.videos = this.props.videos
    }

    componentDidMount() {
        this.props.fetchVideos();
        console.log(this.props.videos)
    }

    render() {
        this.videos = this.props.videos;
        return (
            // <Container>
            <div className="video-index-grid">
                    {this.videos ? this.videos.map((video, i) => {
                        return <VideoItemContainer video={video} key={i}/>
                    }) : 'no videos found'}
            </div>
            // </Container>
        )
    }
}


export default VideoIndex;