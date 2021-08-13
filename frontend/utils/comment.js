// API Utils for ajax


// Ajax call for fetching all comments for a video searched by video ID

export const fetchComments = videoId => {
    return $.ajax({
        method: 'GET',
        url: `api/videos/${videoId}/comments`
    });
};

// Ajax call for fetching a single comment ID

export const fetchComment = commentId => {
    return $.ajax({
        method: 'GET',
        url: `api/comments/${commentId}`
    });
};

// Ajax call for posting a comment object

export const postComment = comment => {
    return $.ajax({
        method: 'POST',
        url: 'api/comments',
        data: { comment }
    });
};

// Ajax call for updating a comment object

export const updateComment = comment => {
    $.ajax({
        method: 'PATCH',
        url: `api/comments/${comment.id}`,
        data: { comment }
    });
};

// Ajax call for deleting comment with ID 

export const deleteComment = commentId => {
    $.ajax({
        method: 'DELETE',
        url: `api/comments/${commentId}`
    });
};