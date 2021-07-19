# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


# require 'faker'
require 'open-uri'

Video.destroy_all
User.destroy_all


users = User.create([    
    {username: 'demo_user', password: 'demo123'},
    {username: 'kaz', password: 'kazkaz'},
    {username: 'NBA', password: 'nbanba'},
    {username: 'Mac Miller', password: 'macmac'},
    {username: 'World Of Dance', password: 'worldofdance'},
    {username: 'doggie', password: 'dogdog'},
    {username: 'Calm', password: 'calmcalm'}
])

videos = Video.create([
    {
        view_count: 12345, 
        title: 'Bluprint World of Dance WOD Atlanta 2018', 
        uploader_id: User.find_by_credentials('World Of Dance', 'worldofdance').id    
    },
    {
        view_count: 25345, 
        title: 'LeBron James BEST Career Dunks!', 
        uploader_id: User.find_by_credentials('NBA', 'nbanba').id    
    },
    {
        view_count: 65463, 
        title: 'Woods | Mac Miller', 
        uploader_id: User.find_by_credentials('Mac Miller', 'macmac').id    
    },
    {
        view_count: 76456, 
        title: '1 minute of beautiful scenery', 
        uploader_id: User.find_by_credentials('kaz', 'kazkaz').id    
    },
    {
        view_count: 80604,
        title: 'Cute doggie',
        uploader_id: User.find_by_credentials('doggie', 'dogdog')
    },
    {
        view_count: 105632, 
        title: 'LeBron James GREATEST BLOCK in NBA History!!!', 
        uploader_id: User.find_by_credentials('NBA', 'nbanba').id    
    },
    {
        view_count: 101532, 
        title: 'Good News | Mac Miller', 
        uploader_id: User.find_by_credentials('Mac Miller', 'macmac').id    
    },
    {
        view_count: 84321,
        title: '1 Minute Meditation',
        uploader_id: User.find_by_credentials('Calm', 'calmcalm').id
    }
])

thumbnail = 'https://active-storage-metube-dev.s3-us-west-1.amazonaws.com/thumbnail.png'
videoUrl = 'https://active-storage-metube-dev.s3-us-west-1.amazonaws.com/testvid.mov'

videoUrls = [
    "https://active-storage-metube-dev.s3.us-west-1.amazonaws.com/bluprint.mp4",
    "https://active-storage-metube-dev.s3.us-west-1.amazonaws.com/lebron.mp4",
    "https://active-storage-metube-dev.s3.us-west-1.amazonaws.com/mac_miller_woods.mp4",
    "https://active-storage-metube-dev.s3.us-west-1.amazonaws.com/scenery.mp4",
    "https://active-storage-metube-dev.s3.us-west-1.amazonaws.com/doggie.mp4",
    "https://active-storage-metube-dev.s3.us-west-1.amazonaws.com/mac_miller_good_news.mp4",
    "https://active-storage-metube-dev.s3.us-west-1.amazonaws.com/lebron_block.mp4",
    "https://active-storage-metube-dev.s3.us-west-1.amazonaws.com/1_minute_meditation.mp4"
]

thumbnails = [
    "https://active-storage-metube-dev.s3.us-west-1.amazonaws.com/bluprint_thumbnail.jpg",
    "https://active-storage-metube-dev.s3.us-west-1.amazonaws.com/lebron_thumbnail.jpg",
    "https://active-storage-metube-dev.s3.us-west-1.amazonaws.com/mac_thumbnail.jpg",
    "https://active-storage-metube-dev.s3.us-west-1.amazonaws.com/scenery_thumbnail.jpg",
    "https://active-storage-metube-dev.s3.us-west-1.amazonaws.com/doggie_thumbnail.png",
    "https://active-storage-metube-dev.s3.us-west-1.amazonaws.com/mac_miller_good_news_thumbnail.png",
    "https://active-storage-metube-dev.s3.us-west-1.amazonaws.com/lebron_block_thumbnail.png",
    "https://active-storage-metube-dev.s3.us-west-1.amazonaws.com/1_minute_meditation_thumbnail.jpg",
    "https://active-storage-metube-dev.s3.us-west-1.amazonaws.com/kobe_ball_fake_thumbnail.jpg"
]

Video.all.each_with_index do |video, i| 
    video.thumbnail.attach(io: open(thumbnails[i]), filename: "#{thumbnails[i].split('/').last}")
    video.upload.attach(io: open(videoUrls[i]), filename: "#{videoUrls[i].split('/').last}")
end