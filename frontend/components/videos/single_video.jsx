import React from 'react';
import Header from '../header/header';
import { Link } from 'react-router-dom';
import { FaUserAlt } from 'react-icons/fa';

class SingleVideo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            video_id: parseInt(this.props.match.params.videoId),
            author_id: parseInt(this.props.currentUser)
        } 
    }

    componentDidMount() {
        this.props.fetchVideo(this.props.match.params.videoId)
        console.log(this.props)
    }

    render() {
        return(
            <div className="video-show-page-whole">
                {/* <Header /> */}
                <div className="video-show-page">
                    {this.props.video ? 
                    <div className="video-show-container">
                        <video className="video"src={this.props.video.uploadUrl} controls />
                        <div className="video-info-container">
                                <p className="video-title">{this.props.video.title}</p>
                                <p className="video-stats">{this.props.video.view_count} views • { this.props.video.created_at.slice(0,10) }</p>
                        </div>
                        <div className="video-description-container">
                                <div className="vid-index-prof">
                                    <FaUserAlt color={'white'} />
                                </div>
                                <div className="vid-show-prof-info">
                                    <p className="video-uploader">{this.props.video.username}</p>
                                    {this.props.video.description ? <p className="vid-desc">this.props.video.description</p> : <p className="vid-desc">this video has no description</p>}
                                </div>
                        </div>
                    </div>
                    : ''}
                </div>
            </div>
        )
    }
}

export default SingleVideo;