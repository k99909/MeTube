import React from 'react';
import SidebarVideoItemContainer from './sidebar_video_item_container';

class VideoSidebar extends React.Component {
    componentDidMount() {
        this.props.fetchVideos();
    }

    randomVideoSelection(videos, n) {
        let randomVideos = Object.values(videos).slice(0);
        let index = randomVideos.indexOf(this.props.video);
        randomVideos = randomVideos.slice(0, index).concat(randomVideos.slice(index + 1));
        let sidebarVideos = [];
        for (let i = 0; i < Object.values(videos).length - 1 && i < n; i++){
            let randInt = Math.floor(Math.random() * randomVideos.length);
            sidebarVideos.push(randomVideos[randInt]);
            randomVideos = randomVideos.slice(0, randInt).concat(randomVideos.slice(randInt + 1));
        };
        return sidebarVideos;
    }

    render() {
        return (
        <div className="video-sidebar">
            <h1>More Videos</h1>
            {this.props.videos ? this.randomVideoSelection(this.props.videos, 8).map((video, i) => {
                return( 
                    <div className="sidebar-video-item">
                        <SidebarVideoItemContainer video={video} key={10*i}/>
                    </div>
                )
            }) : ''}
        </div>
        )
    }
}


export default VideoSidebar;