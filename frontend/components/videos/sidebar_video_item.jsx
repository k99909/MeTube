import React from 'react';
import { Link } from 'react-router-dom';

class SidebarVideoItem extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {

        return (
            
            <div className="sidebar-video-item">

                <Link to={`/watch/${this.props.video.id}`}>
                    <div className="thumbnail">
                        <img src={`${this.props.video.thumbnail}`} alt="thumbnail" />
                    </div>
                </Link >
                <div className="vid-sidebar-info">
                        <div className="vid-sidebar-text">
                        <Link to={`/watch/${this.props.video.id}`}>
                            <p>{this.props.video.title}</p>
                        </Link>
                <Link to={`/watch/${this.props.video.id}`}>
                            <span>{this.props.video.username}</span>
                </Link>
                        </div>
                </div>

            </div>
            
        )

    }
}

export default SidebarVideoItem;
