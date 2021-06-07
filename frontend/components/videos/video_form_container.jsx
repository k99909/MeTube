import VideoForm from './video_form';
import { connect } from 'react-redux';
import { postVideo, updateVideo, clearVideoErrors } from '../../actions/video_actions';


const mSTP = (state, ownProps) => ({
    currentUser: state.session.id,
    action: ownProps.action,
    errors: state.errors.videoErrors
});

const mDTP = dispatch => ({
    postVideo: video => dispatch(postVideo(video)),
    updateVideo: video => dispatch(updateVideo),
    clearVideoErrors: () => dispatch(clearVideoErrors()),
    fetchUser: userId => dispatch(fetchUser(userId))
})

export default connect(mSTP, mDTP)(VideoForm);