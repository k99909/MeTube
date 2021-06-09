import React from 'react';
import Header from '../header/header';
import { Link, Redirect } from 'react-router-dom';
import { FaUserAlt } from 'react-icons/fa';
import VideoSidebarContainer from './video_sidebar_container';
import CommentsContainer from '../comments/comments_container';

class SingleVideo extends React.Component {
    constructor(props) {
        super(props);
        this.handleDelete = this.handleDelete.bind(this)
    }

    componentDidMount() {
        this.props.fetchVideo(this.props.match.params.videoId)
        console.log(this.props)
    }

    componentDidUpdate() {
        this.props.video ? null : this.props.fetchVideo(this.props.match.params.videoId)
    }

    handleDelete(e) {
        e.preventDefault();
        this.props.deleteVideo(this.props.videoId)
    }

    renderErrors() {
        return (
            <ul className="error-messages">
                {this.props.errors.map((error, i) => {
                    return <li key={`error-${i}`}>
                        {error}
                    </li>
                })}
            </ul>
        )
    }

    render() {
        return(
            <div className="video-show-page-whole">
                {/* <Header /> */}
                {this.props.errors.length ? <Redirect to="/404"/> : ''}
                    {this.props.video ? 
                <div className="video-show-page">
                    <div className="video-show-container">
                        <video className="video"src={this.props.video.uploadUrl} controls />
                        <div className="video-info-container">
                                <p className="video-title">{this.props.video.title}</p>
                                <p className="video-stats">{this.props.video.view_count} views • { this.props.video.created_at.slice(0,10) }</p>
                    {this.props.video.uploader_id === this.props.currentUser ? (
                        <button className="video-delete" onClick={this.handleDelete}>Delete Video</button>
                        ) : ''
                    }         
                        </div>
                        <div className="video-description-container">
                                <div className="vid-index-prof">
                                    <FaUserAlt color={'white'} />
                                </div>
                                <div className="vid-show-prof-info">
                                    <p className="video-uploader">{this.props.video.username}</p>
                                    {this.props.video.description ? <p className="vid-desc">{this.props.video.description}</p> : <p className="vid-desc">this video has no description</p>}
                                </div>
                        </div>
                    <CommentsContainer videoId={this.props.video.id}/>
                    </div>
                <VideoSidebarContainer/>
                </div>
                    : ''}
            </div>
        )
    }
}

export default SingleVideo;