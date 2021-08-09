import React from 'react';
import { FaUserAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';

class VideoItem extends React.Component {
    constructor(props) {
        super(props);
        // this.state = {
        //     uploader: ''
        // }
    }

    componentDidMount() {
        // console.log(this.props)
        // this.props.fetchUser(this.props.video.uploader_id)
    }

    render() {

        return (
            <div className="video-index-item">

                <Link to={`/watch/${this.props.video.id}`}>
                <div className="thumbnail">
                    <img src={`${this.props.video.thumbnail}`} alt="thumbnail" />
                </div>
                </Link>

                <div className="vid-index-info">
                    <div className="vid-index-prof">
                        <FaUserAlt color={'white'} />
                    </div>
                    <Link to={`/watch/${this.props.video.id}`} className="title-link">
                    <div className="vid-index-text">
                        <p>{this.props.video.title}</p>
                        <span className="index-username">
                        {this.props.video.username}
                        </span>
                        <span className="index-view-count">
                        {this.props.video.view_count} views
                        </span>
                    </div>
                    </Link>
                </div>

            </div>
        )

    }
}

export default VideoItem;
