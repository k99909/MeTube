// API Util for likes

export const fetchLikes = videoId => {
    return $.ajax({
        method: 'GET',
        url: `/api/videos/${videoId}/likes`
    });
};

export const fetchLike = likeId => {
    return $.ajax({
        method: 'GET',
        url: `/api/likes/${likeId}`
    });
};

export const postLike = like => {
    return $.ajax({
        method: 'POST',
        url: '/api/likes',
        data: { like }
    });
};

export const updateLike = like => {
    return $.ajax({
        method: 'PATCH',
        url: `/api/likes/${like.id}`,
        data: { like }
    });
}

export const deleteLike = likeId => {
    return $.ajax({
        method: 'DELETE',
        url: `/api/likes/${likeId}`
    })
}