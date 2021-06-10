json.set! like.id do 
    json.extract! like, :id, :liker_id, :like_type, :video_id
end