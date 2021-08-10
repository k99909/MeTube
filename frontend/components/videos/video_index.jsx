import React from 'react';
import { Container, Row } from 'react-bootstrap';
import VideoItemContainer from './video_item_container';

class VideoIndex extends React.Component {
    constructor(props) {
        super(props);
        // this.videos = this.props.videos;
    }

    componentDidMount() {
        this.props.fetchVideos();
        console.log(this.props.videos);
    }

    filterVideos(videos, query) {
        if (!query || !videos) {
            return videos
        }
        return videos.filter((video) => {
            console.log(video)
            console.log(query)
            const videoName = video.title.toLowerCase();
            const videoUploader = video.username.toLowerCase();
            return videoName.includes(query) || videoUploader.includes(query);
        });
    }

    render() {
        const { search } = window.location;
        const query = new URLSearchParams(search).get('s');
        this.videos = this.props.videos;
        const filteredVideos = this.filterVideos(this.videos, query);
        return (
            // <Container>
            <div className="video-index-grid">
                    {this.videos ? filteredVideos.map((video, i) => {
                        return <VideoItemContainer video={video} key={i}/>
                    }) : 'no videos found'}
            </div>
            // </Container>
        )
    }
}


export default VideoIndex;