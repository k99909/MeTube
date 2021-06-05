@videos.each do |video|
    json.partial! 'video', video: video
end
