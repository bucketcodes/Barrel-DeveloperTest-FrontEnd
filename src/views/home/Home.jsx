import React, { Component } from "react";
import Hero from "../../components/hero/Hero";
import Featured from "../../components/featured/Featured";
import axios from "axios";
import Recent from "../../components/recent/Recent";

export class Home extends Component {
  constructor() {
    super();
    this.state = {
      posts: []
    };
  }

  componentDidMount() {
    // Get Posts
    let dataURL =
      "http://dev-test-barrel-tim-terminus.pantheonsite.io/cms/?rest_route=/wp/v2/posts";
    axios.get(dataURL).then(res => {
      let data = res.data;
      //Get Photos
      data.forEach(post => {
        axios
          .get(
            `http://dev-test-barrel-tim-terminus.pantheonsite.io/cms/?rest_route=/wp/v2/media/${
              post.featured_media
            }`
          )
          .then(res => {
            //Assign the photo to the post
            let updatedPost = post;
            updatedPost.feature_url = res.data.source_url;

            //Find and assign the category tag
            if (updatedPost.categories[0] === 2) {
              updatedPost.category = "Article";
            } else if (updatedPost.categories[0] === 3) {
              updatedPost.category = "Video";
            } else if (updatedPost.categories[0] === 4) {
              updatedPost.category = "Event";
            } else if (updatedPost.categories[0] === 5) {
              updatedPost.category = "Gallery";
            }

            //Sort the posts by date
            let posts = this.state.posts;
            posts.push(updatedPost);
            posts.sort(function(a, b) {
              var dateB = new Date(a.date),
                dateA = new Date(b.date);
              return dateA - dateB;
            });
            console.log(updatedPost);

            //Set the new state
            this.setState({ posts });
          });
      });
    });
  }

  render() {
    return (
      <div>
        <Hero
          backgroundURL="http://dev-test-barrel-tim-terminus.pantheonsite.io/cms/wp-content/uploads/2019/03/www.knobcreek.com-1293609732325191.jpg"
          title="Maple Never Tasted So Good"
          content="We blend this bourbon with natural smoked maple flavors for a unique, smoky sweetnedd. Full bodied, inviting maple notes that lift to smoke and are complemented with rich vanilla caramel. Smoked hickory and maple wood, with hints of earthy grains"
          imageURL="http://dev-test-barrel-tim-terminus.pantheonsite.io/cms/wp-content/uploads/2019/03/www.knobcreek.com-1310894113736742-e1553217772445.png"
        />
        <Featured post={this.state.posts && this.state.posts[0]} />
        <Recent posts={this.state.posts} />
      </div>
    );
  }
}

export default Home;
