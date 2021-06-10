@likes.each do |like|
    json.partial! 'like', like: like
end