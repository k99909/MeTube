import { connect } from "react-redux";
import SingleVideo from "./single_video";
import { fetchUser } from '../../actions/user_actions';
import { deleteVideo, fetchVideo, updateVideo } from '../../actions/video_actions';
import { postLike, updateLike, deleteLike, fetchLike, fetchLikes } from '../../actions/like_actions';

const mSTP = (state, ownProps) => {
    let video = state.entities.videos[ownProps.match.params.videoId]
    return {
        video: video,
        // user: state.entities.users[video.uploader_id],
        errors: state.errors.video,
        currentUser: state.session.id,
        videoId: parseInt(ownProps.match.params.videoId),
        likes: Object.values(state.entities.likes)
    };
};

const mDTP = dispatch => ({
    deleteVideo: videoId => dispatch(deleteVideo(videoId)),
    fetchVideo: videoId => dispatch(fetchVideo(videoId)),
    postLike: like => dispatch(postLike(like)),
    updateLike: like => dispatch(updateLike(like)),
    deleteLike: likeId => dispatch(deleteLike(likeId)),
    fetchLike: likeId => dispatch(fetchLike(likeId)),
    fetchLikes: videoId => dispatch(fetchLikes(videoId))
    // updateVideo: video => dispatch(updateVideo(video)),
});



export default connect(mSTP, mDTP)(SingleVideo);