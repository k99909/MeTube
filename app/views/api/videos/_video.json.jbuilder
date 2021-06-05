json.set! video.id do 
    json.extract! video, :id, :title, :description, :uploader_id, :view_count
    json.username video.uploader.username
end