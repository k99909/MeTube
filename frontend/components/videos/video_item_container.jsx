import { connect } from 'react-redux';
import VideoItem from './video_item';
import { fetchUser } from '../../actions/user_actions'

const mSTP = (state, ownProps) => {
    return {
        uploader: state.entities.users[ownProps.video.uploader_id]
    }
}

const mDTP = (dispatch, ownProps) => ({
    fetchVideos: () => dispatch(fetchVideos()),
    fetchUser: userId => dispatch(fetchUser(userId))
})

export default connect(mSTP, mDTP)(VideoItem);