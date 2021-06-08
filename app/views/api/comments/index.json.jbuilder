@comments.each do |comment|
    json.partial! "comment", comment: comment
end