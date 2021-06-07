# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


# require 'faker'

Video.destroy_all
User.destroy_all


users = User.create([    
    {username: 'demo_user', password: 'demo123'},
    {username: 'kaz', password: 'kazkaz'}
])

videos = Video.create([
    {
        view_count: 10000, 
        title: 'video1', 
        uploader_id: User.find_by_credentials('kaz', 'kazkaz').id    
    },
    {
        view_count: 10000, 
        title: 'video2', 
        uploader_id: User.find_by_credentials('kaz', 'kazkaz').id    
    },
    {
        view_count: 10000, 
        title: 'video3', 
        uploader_id: User.find_by_credentials('kaz', 'kazkaz').id    
    },
    {
        view_count: 10000, 
        title: 'video4', 
        uploader_id: User.find_by_credentials('kaz', 'kazkaz').id    
    },
    {
        view_count: 10000, 
        title: 'video5', 
        uploader_id: User.find_by_credentials('kaz', 'kazkaz').id    
    },
    {
        view_count: 10000, 
        title: 'video6', 
        uploader_id: User.find_by_credentials('kaz', 'kazkaz').id    
    },
    {
        view_count: 10000, 
        title: 'video7', 
        uploader_id: User.find_by_credentials('kaz', 'kazkaz').id    
    },
    {
        view_count: 10000, 
        title: 'video8', 
        uploader_id: User.find_by_credentials('kaz', 'kazkaz').id    
    },
    {
        view_count: 10000, 
        title: 'video9', 
        uploader_id: User.find_by_credentials('kaz', 'kazkaz').id    
    },
    {
        view_count: 10000, 
        title: 'video10', 
        uploader_id: User.find_by_credentials('kaz', 'kazkaz').id    
    },
    {
        view_count: 10000, 
        title: 'video11', 
        uploader_id: User.find_by_credentials('kaz', 'kazkaz').id    
    },
    {
        view_count: 10000, 
        title: 'video12', 
        uploader_id: User.find_by_credentials('kaz', 'kazkaz').id    
    }
])

thumbnail = "/Users/kazukidebear/Downloads/thumbnail.png"
videoUrl = "/Users/kazukidebear/Downloads/testvid.mov"

Video.all.each do |video| 
    video.thumbnail.attach(io: File.open(thumbnail), filename: 'thumbnail.png')
    video.upload.attach(io: File.open(videoUrl), filename: 'testvid.mov')
end