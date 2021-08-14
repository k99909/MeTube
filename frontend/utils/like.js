// API Util for likes

//Ajax call to fetch all likes for a video by ID

export const fetchLikes = videoId => {
    return $.ajax({
        method: 'GET',
        url: `/api/videos/${videoId}/likes`
    });
};

// Ajax call to fetch single like

export const fetchLike = likeId => {
    return $.ajax({
        method: 'GET',
        url: `/api/likes/${likeId}`
    });
};

// Ajax call to post Like

export const postLike = like => {
    return $.ajax({
        method: 'POST',
        url: '/api/likes',
        data: { like }
    });
};

// Ajax call to update Like (like type)

export const updateLike = like => {
    return $.ajax({
        method: 'PATCH',
        url: `/api/likes/${like.id}`,
        data: { like }
    });
};

// Ajax call to delete Like given like ID

export const deleteLike = likeId => {
    return $.ajax({
        method: 'DELETE',
        url: `/api/likes/${likeId}`
    });
};