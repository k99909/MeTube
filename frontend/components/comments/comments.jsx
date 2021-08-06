import React from 'react';
import { FaUserAlt } from 'react-icons/fa';
import { BsThreeDotsVertical } from 'react-icons/bs';
import { withRouter } from 'react-router-dom';

class Comments extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            body: '',
            videoId: this.props.videoId
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount() {
        this.props.fetchComments();
    }

    componentDidUpdate() {
        if (this.state.videoId !== this.props.match.params.videoId) {
        this.props.fetchComments();
        this.setState({ videoId: this.props.match.params.videoId })
        }
    }

    update(field) {
        return e => {
            this.setState({ [field]: e.currentTarget.value })
        };
    }

    handleSubmit(e) {
        e.preventDefault();
        const comment = Object.assign({
            video_id: this.props.match.params.videoId,
            author_id: this.props.currentUser
        }, this.state);
        this.props.postComment(comment);
        this.setState({body: ''});
    }

    handleDelete(commentId) {
        this.props.deleteComment(commentId);
    }

    dropdownClick(e) {
        e.preventDefault();
        document.getElementById("comment-dropdown").classList.toggle("show");
    }
    
    renderErrors() {
        return (
            <ul>
                {this.props.errors.map((error, i) => {
                    return <li key={`error-${i}`}>
                        {error}
                    </li>
                })}
            </ul>
        )
    }

    render() {
        return (
            <div className="comment-box">
                <h2 className="comment-count">{this.props.comments.length} Comments</h2>
                {this.props.currentUser ? 
                <div className="comment-form-div">
                    <div className="vid-index-prof">
                        <FaUserAlt color={'white'} size={15} />
                    </div> 
                        <form className="comment-form" onSubmit={ this.state.body.length > 0 ? this.handleSubmit : '' }>
                        <label className="comment-form-body">
                            <input 
                                type="text" 
                                value={this.state.body} 
                                onChange={this.update('body')}
                                placeholder="Add a public comment..."
                                className = "comment-form-input"
                                activeClassName="active-input"
                            />
                            <div className="border-underline"></div>
                        </label>
                        {console.log(this.state.body.length)}
                            <input 
                                className={this.state.body.length > 0 ? 'comment-form-submit' : 'comment-form-submit empty'} 
                                type="submit" 
                                value="COMMENT"
                                disabled={this.state.body.length > 0 ? '' : 'disabled'}
                            />
                    </form>
                </div>
                : ''}
                {this.props.comments ? 
                 <ul className="comments-display-box">
                     {this.props.comments.map((comment, i) => {
                         return <li className="single-comment-display">
                             <div className="vid-index-prof">
                                 <FaUserAlt color={'white'} size={15} />
                             </div>
                             <div className="single-comment-main">
                                <span className="comment-author">{comment.author}</span>
                                <p className="comment-body">{comment.body}</p>
                             </div>
                             {/* <div className="dropbtn" onClick={this.dropdownClick}>
                                 <BsThreeDotsVertical size={23} color={'lightgray'}/>
                             </div> */}
                                 {/* <div className="dropdown-content" id="comment-dropdown"> */}
                             { this.props.currentUser === comment.author_id ? <button onClick={() => this.handleDelete(comment.id)}>Delete Comment</button> : ''}
                                 {/* </div> */}
                             </li>
                     }).reverse()}
                 </ul>
                : '' }
            </div>
        )
    }
}

export default withRouter(Comments);