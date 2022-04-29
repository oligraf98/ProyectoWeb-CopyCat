import React, { Component } from 'react';

class Vid extends Component {
  render(){
    return(
    <article class="video">
      <a href="#" class="thumbnail" duration="13:13">
        <img class="thumbnail-img" src="http://unsplash.it/250/150?gravity=center"/>
      </a>
      <div class="text">
        <a href="#">
          <img class="channel-pic" src="http://unsplash.it/36/36?gravity=center"/>
        </a>
        <div class="names">
          <a href="#" class="title">Generic Title </a>
          <a href="#" class="channel-name"> Awesome Channel</a>
          <div class="stats">
            <span>1.5K views </span>
            •
            <span> 1 hour ago</span>
          </div>
        </div>
      </div>
    </article>
  );
  }
}

export default Vid;
