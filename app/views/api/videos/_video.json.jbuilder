json.set! video.id do 
    json.extract! video, :id, :title, :description, :uploader_id, :view_count, :created_at
    json.username video.uploader.username
    json.thumbnail url_for(video.thumbnail)
    json.uploadUrl url_for(video.upload)
    json.comments video.comments.map {|comment| comment.id}
    json.likes video.likes.map {|like| like.id}
end