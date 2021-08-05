import * as UtilLikeAPI from '../utils/like';

export const RECEIVE_LIKES = 'RECEIVE_LIKES';
export const RECEIVE_LIKE = 'RECEIVE_LIKE';
export const REMOVE_LIKE = 'REMOVE_LIKE';

const receiveLikes = likes => ({
    type: RECEIVE_LIKES,
    likes
});

const receiveLike = like => ({
    type: RECEIVE_LIKE,
    like
});

const removeLike = likeId => ({
    type: REMOVE_LIKE,
    likeId
});

export const fetchLikes = videoId => dispatch => (
    UtilLikeAPI.fetchLikes(videoId)
        .then(likes => dispatch(receiveLikes(likes)))
);

export const fetchLike = likeId => dispatch => (
    UtilLikeAPI.fetchLike(likeId)
        .then(like => dispatch(receiveLike(like)))
);

export const deleteLike = likeId => dispatch => {
    UtilLikeAPI.deleteLike(likeId);
    return dispatch(removeLike(likeId));
}

export const postLike = like => dispatch => (
    UtilLikeAPI.postLike(like)
        .then(like => dispatch(receiveLike(like)))
)

export const updateLike = like => dispatch => (
    UtilLikeAPI.updateLike(like)
        .then(like => dispatch(receiveLike(like)))
)