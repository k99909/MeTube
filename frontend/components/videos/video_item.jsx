import React from 'react';
import { FaUserAlt } from 'react-icons/fa';


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

                <div className="thumbnail">
                    thumbnail
                </div>

                <div className="vid-index-info">
                    <div className="vid-index-prof">
                        <FaUserAlt color={'white'} />
                    </div>
                    <div className="vid-index-text">
                        <p>{this.props.video.title}</p>
                        <span>{this.props.video.username}</span>
                    </div>
                </div>

            </div>
        )

    }
}

export default VideoItem;
