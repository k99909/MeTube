import { connect } from "react-redux";
import SingleVideo from "./single_video";
import { fetchUser } from '../../actions/user_actions';
import { deleteVideo, fetchVideo, updateVideo } from '../../actions/video_actions';

const mSTP = (state, ownProps) => {
    console.log(ownProps.match.params.videoId)
    let video = state.entities.videos[ownProps.match.params.videoId]
    return {
        video: video,
        // user: state.entities.users[video.uploader_id],
        currentUser: state.session.currentUser,
        state: state
    }
}

const mDTP = dispatch => ({
    deleteVideo: videoId => dispatch(deleteVideo(videoId)),
    fetchVideo: videoId => dispatch(fetchVideo(videoId)),
    updateVideo: video => dispatch(updateVideo(video)),
    fetchUser: userId => dispatch(fetchUser(userId))
})



export default connect(mSTP, mDTP)(SingleVideo);