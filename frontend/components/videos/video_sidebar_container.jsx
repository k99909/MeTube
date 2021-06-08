import { connect } from 'react-redux';
import VideoSidebar from './video_sidebar';
import {withRouter} from 'react-router-dom';
import { fetchVideos } from '../../actions/video_actions';

const mSTP = (state, ownProps) => ({
    videos: state.entities.videos,
    video: state.entities.videos[ownProps.match.params.videoId] 
})

const mDTP = dispatch => ({
    fetchVideos: () => dispatch(fetchVideos())
})

export default withRouter(connect(mSTP, mDTP)(VideoSidebar));