import * as UtilCommentAPI from '../utils/comment';

export const RECEIVE_COMMENTS = "RECEIVE_COMMENTS";
export const RECEIVE_COMMENT = "RECEIVE_COMMENT";
export const REMOVE_COMMENT = "REMOVE_COMMENT";
export const RECEIVE_COMMENT_ERRORS = "RECEIVE_COMMENT_ERRORS";
export const CLEAR_COMMENT_ERRORS = "CLEAR_COMMENT_ERRORS";

const receiveComments = comments => ({
    type: RECEIVE_COMMENTS,
    comments
})

const receiveComment = comment => ({
    type: RECEIVE_COMMENT,
    comment
})

const removeComment = commentId => ({
    type: REMOVE_COMMENT,
    commentId
})

const receiveCommentErrors = errors => ({
    type: RECEIVE_COMMENT_ERRORS,
    errors
})  

export const clearCommentErrors = () => ({
    type: CLEAR_COMMENT_ERRORS
})

export const fetchComments = videoId => dispatch => (
    UtilCommentAPI.fetchComments(videoId)
        .then(comments => dispatch(receiveComments(comments)))
)

export const fetchComment = commentId => dispatch => (
    UtilCommentAPI.fetchComment(commentId)
        .then(comment => dispatch(receiveComment(comment)))
)

export const deleteComment = commentId => dispatch => {
    UtilCommentAPI.deleteComment(commentId);
    return dispatch(removeComment(commentId));
}

export const postComment = comment => dispatch => (
    UtilCommentAPI.postComment(comment)
        .then(comment => dispatch(receiveComment(comment)),
        err => (dispatch(receiveCommentErrors(err.responseJSON)))
        )
)

export const updateComment = comment => dispatch => (
    UtilCommentAPI.updateComment(comment)
        .then(comment => dispatch(receiveComment(comment)),
            err => (dispatch(receiveCommentErrors(err.responseJSON)))
        )
)