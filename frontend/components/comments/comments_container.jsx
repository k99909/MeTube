import Comments from './comments';
import { connect } from 'react-redux';
import { 
    postComment, 
    updateComment, 
    fetchComment, 
    fetchComments,
    deleteComment 
} from '../../actions/comment_actions';
import { withRouter } from 'react-router-dom';

const mSTP = (state, ownProps) => ({
    comments: Object.values(state.entities.comments),
    currentUser: state.session.id
});

const mDTP = (dispatch, ownProps) => ({
    postComment: comment => dispatch(postComment(comment)),
    updateComment: comment => dispatch(updateComment(comment)),
    deleteComment: commentId => dispatch(deleteComment(commentId)),
    fetchComments: () => dispatch(fetchComments(ownProps.match.params.videoId)),
    fetchComment: commentId => dispatch(fetchComment(commentId))
});


export default withRouter(connect(mSTP, mDTP)(Comments));