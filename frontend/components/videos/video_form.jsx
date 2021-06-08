import React from 'react';
import { Redirect } from 'react-router-dom';

class VideoForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedVideo: "",
            selectedThumbnail: "",
            title: "",
            description: "",
            redirect: '/login'
        }
        this.updateVideo = this.updateVideo.bind(this);
        this.updateThumbnail = this.updateThumbnail.bind(this);
        this.updateTitle = this.updateTitle.bind(this);
        this.updateDescription = this.updateDescription.bind(this);
        this.createVideo = this.createVideo.bind(this);
    }

    updateVideo(e) {
        this.setState({ selectedVideo: e.target.files[0] })
    }

    updateThumbnail(e) {
        this.setState({ selectedThumbnail: e.target.files[0] })
    }

    updateTitle(e) {
        this.setState({ title: e.target.value })
    }

    updateDescription(e) {
        this.setState({ description: e.target.value })
    }

    createVideo() {
        const formData = new FormData();
        let title = this.state.title;
        let description = this.state.description;
        let upload = this.state.selectedVideo;
        let thumbnail = this.state.selectedThumbnail;

        formData.append('video[uploader_id]', this.props.currentUser)
        this.setState({ 
            title: '', 
            description: '',
            selectedVideo: '',
            selectedThumbnail: ''
        });

        if (this.props.action === "Upload Video"){
            formData.append('video[view_count]', 0);
            formData.append('video[title]', title);
            formData.append('video[description]', description);
            formData.append('video[upload]', upload);
            formData.append('video[thumbnail]', thumbnail);
            console.log(title)
            this.props.postVideo(formData)
        } else {
            if(title) formData.append('video[title]', title);
            if(description) formData.append('video[description]', description);
            if(upload) formData.append('video[upload]', upload);
            if(thumbnail) formData.append('video[thumbnail]', thumbnail);
            formData.append('video[id]', this.props.videoId);
            this.props.updateVideo(formData)
        }''
    }
    render() {
        if (!this.props.currentUser) {
            return <Redirect to={this.state.redirect} />
        }
        return (
            <div className="video-form">
                {/* {console.log(this.props.currentUser)} */}

                <div className="video-form-box">
                    <h1>{this.props.action}</h1>
                    {this.props.errors ? this.props.errors.map(err => <div className="video-error">{err}</div>) : ''}
                    <h2>Details</h2>
                    <div className="video-form-main">
                        <div className="details">
                            <label className="title-label">Title (required)
                                <input className="title-upload" value={this.state.title} type="text" onChange={this.updateTitle} />
                            </label>
                            <label className="description-label">Description
                                <textarea className="description-upload" value={this.state.description} onChange={this.updateDescription} cols="30" rows="10"></textarea>
                            </label>
                            <label className="thumbnail-label">Upload Thumbnail
                                <input type="file" className="thumbnail-upload" onChange={this.updateThumbnail} accept="image/*"/>
                            </label>
                        </div>
                        <label className="video-label">Upload Video
                            <input type="file" className="video-upload" onChange={this.updateVideo} accept="video/*" />
                        </label>
                    </div>
                    <button className="upload-submit" type="submit" onClick={this.createVideo}>Confirm</button>
                </div>
            </div>
        )
    }
}

export default VideoForm;