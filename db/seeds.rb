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
    {username: 'Calm', password: 'calmcalm'},
    {username: 'Chance The Rapper', password: 'chancechance'},
    {username: 'AsapSCIENCE', password: 'asapasap'}
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
    },
    {
        view_count: 48532,
        title: 'Kobe Bryant DOES NOT FLINCH!',
        uploader_id: User.find_by_credentials('NBA', 'nbanba').id
    },
    {
        view_count: 22315,
        title: 'Chance The Rapper - The Heart & The Tongue (2021) | [Official Music Video]',
        uploader_id: User.find_by_credentials('Chance The Rapper', 'chancechance').id
    },
    {
        view_count: 45642,
        title: "What Happens In One Minute?",
        uploader_id: User.find_by_credentials('AsapSCIENCE', 'asapasap').id
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
    "https://active-storage-metube-dev.s3.us-west-1.amazonaws.com/1_minute_meditation.mp4",
    "https://active-storage-metube-dev.s3.us-west-1.amazonaws.com/kobe_ball_fake.mp4",
    "https://active-storage-metube-dev.s3.us-west-1.amazonaws.com/chance_the_rapper_heart_and_tongue.mp4",
    "https://active-storage-metube-dev.s3.us-west-1.amazonaws.com/what_happens_in_one_minute.mp4"
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
    "https://active-storage-metube-dev.s3.us-west-1.amazonaws.com/kobe_ball_fake_thumbnail.jpg",
    "https://active-storage-metube-dev.s3.us-west-1.amazonaws.com/chance_the_rapper_heart_and_tongue_thumbnail.jpg",
    "https://active-storage-metube-dev.s3.us-west-1.amazonaws.com/what_happens_in_one_minute_thumbnail.jpg"
]

Video.all.each_with_index do |video, i| 
    video.thumbnail.attach(io: open(thumbnails[i]), filename: "#{thumbnails[i].split('/').last}")
    video.upload.attach(io: open(videoUrls[i]), filename: "#{videoUrls[i].split('/').last}")
end


RandomComments = [
    "Don't steal, don't lie, don't cheat, don't sell drugs. The government hates competition!".
    "Microsoft bought Skype for 8,5 billion!.. what a bunch of idiots! I downloaded it for free!",
    "In my life there's been heartache and pain I don't know if I can face it again Can't stop now, I've traveled so far To change this lonely life.",
    "Yo wa gwan blud you rudeboy bludclart.",
    "Oh, a storm is threat'ning My very life today If I don't get some shelter Oh yeah, I'm gonna fade away.",
    "Now this is the story all about how My life got flipped, turned upside down And I'd like to take a minute just sit right there I'll tell you how I became the prince of a town called Bel-air.",
    "A good lawyer knows the law; a clever one takes the judge to lunch.",
    "Sorry, I can't hangout. My uncle's cousin's sister in law's best friend's insurance agent's roommate's pet goldfish died. Maybe next time.",
    "Loving you Isn't the right thing to do How can I Ever change things that I feel? If I could Maybe I'd give you my world How can I When you won't take it from me?",
    "I see trees of green........ red roses too I see em bloom..... for me and for you And I think to myself.... what a wonderful world.",
    "Don't want to close my eyes I don't want to fall asleep Cause I'd miss you babe And I don't want to miss a thing Cause even when I dream of you The sweetest dream will never do I'd still miss you babe And I don't want to miss a thing.",
    "I like to wax my legs and stick the hair on my back. Why? Because it keeps my back warm. There's method in my madness.",
    "Sometimes I wonder if I really can. But then I think to myself, maybe I can't. But if I could, that would be good. Maybe it's all a lie?",
    "If I could I would. Wether or not I should, I still would.",
    "I see you have something to talk about. Well, I have something to shout about. Infact something to sing about. But I'll just keep quiet and let you carry on.",
    "Some people come into our lives and leave footprints on our hearts, while others come into our lives and make us wanna leave footprints on their face.",
    "Look! In the sky. It's a bird, it's a plane. Or is it a hellicopter? No actually I think it is a bird. Or maybe I'm just seeing things. Who knows... After 10 shots of Whiskey things start to get a bit strange.",
    "If you really wanted to do that, then why wouldn't you do that? Instead you do this. It makes no sense.",
    "Waffles are always better without fire ants and fleas.",
    "The irony of the situation wasn't lost on anyone in the room.",
    "The hand sanitizer was actually clear glue.",
    "The drainage pipe allowed the wildlife to cross the highway without worrying about cars.",
    "Erin accidentally created a new universe.",
    "The river stole the gods.",
    "A song can make or ruin a person’s day if they let it get to them.",
    "Carol drank the blood as if she were a vampire.",
    "He drank life before spitting it out.",
    "The sight of his goatee made me want to run and hide under my sister-in-law's bed.",
    "You have every right to be angry, but that doesn't give you the right to be mean.",
    "We debated the greater need for an umbrella, in sunshine for shade or in rain for dryness.",
    "Pink horses galloped across the sea.",
    "Trash covered the landscape like sprinkles do a birthday cake.",
    "It was a slippery slope and he was willing to slide all the way to the deepest depths.",
    "They did nothing as the raccoon attacked the lady’s bag of food.",
    "The overpass went under the highway.",
    "He had unknowingly taken up sleepwalking as a nighttime hobby.",
    "He decided water-skiing on a frozen lake wasn’t a good idea.",
    "He felt that dining on the bridge brought romance to his relationship with his cat.",
    "I only enjoy window shopping when the windows are transparent.",
    "Please tell me you don't work in a morgue.",
    "Homesickness became contagious in the younger campers cabin.",
    "Sometimes it is better to just walk away from things and go back to them later when you’re in a better frame of mind.",
    "Peter found road kill an excellent way to save money on dinner.",
    "The paintbrush was angry at the color the artist chose to use."
]


Video.all.each_with_index do |video, i|
    5.times do Comment.create(
        {
            body: RandomComments.sample,
            video_id: video.id,
            author_id: User.all.sample.id
        }
    )
end


Video.all.each_with_index do |video, i|
    4.times do Like.create(
        {
            liker_id: 5,
            video_id: video.id,
            
        }
    )
end