import React from 'react';
import Header from '../header/header';
import { Link, Redirect } from 'react-router-dom';
import { FaUserAlt } from 'react-icons/fa';
import { FiThumbsDown, FiThumbsUp } from 'react-icons/fi';
import VideoSidebarContainer from './video_sidebar_container';
import CommentsContainer from '../comments/comments_container';

class SingleVideo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            likes: this.props.likes.filter(like => like.like_type).length,
            dislikes: this.props.likes.filter(like => !like.like_type).length
        };
        this.handleDelete = this.handleDelete.bind(this);
        this.handleLike = this.handleLike.bind(this);
        this.handleDislike = this.handleDislike.bind(this);
        this.userLikesVideo = this.userLikesVideo.bind(this);
    }

    componentDidMount() {
        this.props.fetchVideo(this.props.match.params.videoId);
        this.props.fetchLikes(this.props.match.params.videoId)
        console.log('likes: ', this.props.likes)
    }

    componentDidUpdate() {
        if (!this.props.video)
           {
            this.props.fetchVideo(this.props.match.params.videoId);
            this.props.fetchLikes(this.props.match.params.videoId)
        } else {
            console.log('likes then video likes length: ', this.props.likes.length, this.props.video.likes.length)
            if (this.props.likes.length != this.props.video.likes.length) {
                this.props.fetchLikes(this.props.match.params.videoId)
            } else {if (this.props.likes.length > 0) {
                if (this.props.likes[0].video_id != this.props.match.params.videoId) {
                    this.props.fetchLikes(this.props.match.params.videoId)
                }
        }}}

    }

    handleDelete(e) {
        e.preventDefault();
        this.props.deleteVideo(this.props.videoId)
    }

    handleLike(e) {
        e.preventDefault();
        if (!this.props.currentUser) return <p>You must be logged in to like a video</p>
        let currentUserVidLike = this.props.likes.filter(like => like.liker_id === this.props.currentUser)
        if (currentUserVidLike.length > 0) {
             if (currentUserVidLike[0].like_type) {
                this.props.deleteLike(currentUserVidLike[0].id)
             } else {
                    this.props.updateLike({ id: currentUserVidLike[0].id, liker_id: this.props.currentUser, video_id: this.props.match.params.videoId, like_type: true })
                }
        } else {this.props.postLike({liker_id: this.props.currentUser, video_id: this.props.match.params.videoId, like_type: true})}
        this.props.fetchVideo(this.props.match.params.videoId);
    }

    handleDislike(e) {
        e.preventDefault();
        if (!this.props.currentUser) return <p>You must be logged in to dislike a video</p>
        let currentUserVidLike = this.props.likes.filter(like => like.liker_id === this.props.currentUser)
        if (currentUserVidLike.length > 0) {
             if (!currentUserVidLike[0].like_type) {
                this.props.deleteLike(currentUserVidLike[0].id)
             } else {
                    this.props.updateLike({ id: currentUserVidLike[0].id, liker_id: this.props.currentUser, video_id: this.props.match.params.videoId, like_type: false })
                }
        } else {this.props.postLike({liker_id: this.props.currentUser, video_id: this.props.match.params.videoId, like_type: false})}
        this.props.fetchVideo(this.props.match.params.videoId);
    }

    userLikesVideo() {
        return this.props.likes.filter(like => like.liker_id === this.props.currentUser && like.like_type).length > 0
    }

    userDislikesVideo() {
        return this.props.likes.filter(like => like.liker_id === this.props.currentUser && !like.like_type).length > 0
    }

    notLoggedIn(e) {
        e.preventDefault();
        document.getElementById("not-logged-in-error").classList.toggle('show');
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
                    <p id="not-logged-in-error" className="not-logged-in-error">You must be logged in to do this action</p>
                    <div className="video-buttons">
                        <div className={this.userLikesVideo() || this.userDislikesVideo() ? "likes-container liked" : "likes-container"}>
                            <div className={this.userLikesVideo() ? "positive-likes liked" : "positive-likes"} onClick={this.props.currentUser ? this.handleLike : this.notLoggedIn}>
                                <FiThumbsUp size={30} />
                                <span>{this.props.likes.filter(like => like.like_type).length}</span>
                            </div>
                            <div className={this.userDislikesVideo() ? "negative-likes liked" : "negative-likes"} onClick={this.props.currentUser ? this.handleDislike : this.notLoggedIn}>
                                <FiThumbsDown size={30} />    
                                <span>{this.props.likes.filter(like => !like.like_type).length}</span>
                            </div>
                        </div>         
                    </div>
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