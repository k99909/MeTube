@videos.each do |video|
    json.partial! 'index', video: video
end