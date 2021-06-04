import * as UtilVideoAPI from '../utils/video';

export const RECEIVE_VIDEOS = "RECEIVE_VIDEOS";
export const RECEIVE_VIDEO = "RECEIVE_VIDEO";
export const REMOVE_VIDEO = "REMOVE_VIDEO";
export const RECEIVE_VIDEO_ERRORS = "RECEIVE_VIDEO_ERRORS";
export const CLEAR_VIDEO_ERRORS = "CLEAR_VIDEO_ERRORS";

const receiveVideos = videos => ({
    type: RECEIVE_VIDEOS,
    videos
})

const receiveVideo = video => ({
    type: RECEIVE_VIDEO,
    video
})

const removeVideo = videoId => ({
    type: REMOVE_VIDEO,
    videoId
})

const receiveVideoErrors = errors => ({
    type: RECEIVE_VIDEO_ERRORS,
    errors
})

export const clearVideoErrors = () => ({
    type: CLEAR_VIDEO_ERRORS
})

export const fetchVideos = () => dispatch => (
    UtilVideoAPI.fetchVideos()
        .then(videos => dispatch(receiveVideos(videos)))
)

export const fetchVideo = videoId => dispatch => (
    UtilVideoAPI.fetchVideo(videoId)
        .then(video => dispatch(receiveVideo(video)))
)

export const deleteVideo = videoId => dispatch => (
    UtilVideoAPI.deleteVideo(videoId)
        .then(() => dispatch(removeVideo(videoId)))
)

export const postVideo = video => dispatch => (
    UtilVideoAPI.postVideo(video)
        .then(video => dispatch(receiveVideo(video)),
        err => (dispatch(receiveVideoErrors(err.responseJSON))))
)

export const updateVideo = video => dispatch => (
    UtilVideoAPI.updateVideo(video)
        .then(video => dispatch(receiveVideo(video)),
        err => dispatch(receiveVideoErrors(err.responseJSON)))
)