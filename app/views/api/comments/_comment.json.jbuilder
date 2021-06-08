json.set! comment.id do
    json.extract! comment, :id, :body, :author_id, :parent_id, :video_id, :created_at
    json.viewChildren false
    json.comments comment.replies.map {|reply| reply.id}
end