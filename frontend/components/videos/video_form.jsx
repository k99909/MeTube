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
        }
    }
    render() {
        if (!this.props.currentUser) {
            return <Redirect to={this.state.redirect} />
        }
        return (
            <div className="video-form">
                {/* {console.log(this.props.currentUser)} */}
                <h1>{this.props.action}</h1>

                <div className="video-form-box">
                    {this.props.errors ? this.props.errors.map(err => <div className="video-error">{err}</div>) : ''}
                    <label>Upload Video:
                        <input type="file" className="video-upload" onChange={this.updateVideo} accept="video/*" />
                    </label>
                    <label>Upload Thumbnail:
                        <input type="file" className="thumbnail-upload" onChange={this.updateThumbnail} accept="image/*"/>
                    </label>
                    <label>Title:
                        <input className="title-upload" value={this.state.title} type="text" onChange={this.updateTitle} />
                    </label>
                    <label>Description:
                        <textarea className="description-upload" value={this.state.description} onChange={this.updateDescription} cols="30" rows="10"></textarea>
                    </label>
                    <button className="upload-submit" type="submit" onClick={this.createVideo}>Upload Video</button>
                </div>
            </div>
        )
    }
}

export default VideoForm;