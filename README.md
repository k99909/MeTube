# MeTube

What is MeTube?

MeTube is a clone of YouTube, the world's most popular video sharing social media site. In this application, users are able to watch and interact with videos from other users around the world, along with upload videos of their own.

In MeTube, users are able to create accounts, comment on videos, upload videos, and like or dislike videos.

https://metubeclone.herokuapp.com/#/

The technologies used in this project include Ruby on Rails, React, Redux, JavaScript, jQuery, JSX, postgreSQL and heroku app.

# Video Index Page

![Screen Shot 2021-06-11 at 9 25 51 AM](https://user-images.githubusercontent.com/73315091/121718375-18360d00-ca97-11eb-8766-e2b8d043b7f4.png)

![Screen Shot 2021-06-11 at 9 28 36 AM](https://user-images.githubusercontent.com/73315091/121718702-719e3c00-ca97-11eb-9e42-a1f4ee20f3d6.png)

The video index page has an expandable sidebar that allows users to sign in or sign out. 

# Video Show Page

![Screen Shot 2021-06-11 at 9 30 43 AM](https://user-images.githubusercontent.com/73315091/121719531-c346c680-ca97-11eb-93d3-3106654fd8a3.png)

Each video has a page that shows all of it's information, user info, a video sidebar with randomly selected videos from the index, and a comment section.

One of the biggest challenges I came across during this project was having the likes update correctly with the show page. I was having difficulty fetching the data from the backend for the appropriate videos in the single video page, as the component was not remounting when I was changing only the video ID in the url bar.
The solution I came up with was a series of conditionals inside of the componentDidUpdate that allows for a video to fetch likes from the backend if either the current likes in the state are not for the same video, or if there are no likes and the video is supposed to have likes.

```     
componentDidUpdate() {
        if (!this.props.video)
           {
            this.props.fetchVideo(this.props.match.params.videoId);
            this.props.fetchLikes(this.props.match.params.videoId)
        } else {
            console.log('likes then video likes length: ', this.props.likes.length, this.props.video.likes.length)
            if (this.props.likes.length != this.props.video.likes.length) {
                this.props.fetchLikes(this.props.match.params.videoId)
            } else {if (this.props.likes.length > 0) {
                if (this.props.likes[0].video_id != this.props.match.params.videoId) {
                    this.props.fetchLikes(this.props.match.params.videoId)
                }
        }}}

    }
```

