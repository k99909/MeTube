json.set! comment.id do
    json.extract! comment, :id, :body, :author_id, :parent_id, :video_id, :created_at
    # json.replies comment.replies.map {|reply| reply.id}
    json.author comment.author.username
end