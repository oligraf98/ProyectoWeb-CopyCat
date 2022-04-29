import React, { Component } from 'react';
import ytlogo from './pics/YTlogo.png';
import search from './pics/Search.png';
import hlines from './pics/Hlines.png'
import mic from './pics/Mic.png';
import cam from './pics/Cam.png';
import grid from './pics/Grid.png';
import bell from './pics/Bell.png';

class Headr extends Component {
  render(){
    return(
    <header class ="header">
      <a href="#" class="side-panel-btn">
        <img src={hlines} alt="Side Panel"/>
      </a>
      <a href="#">
        <img src={ytlogo} alt="Youtube" class="youtube-logo"/>
      </a>
      <form class="searchbar">
        <input class="search-input" type="search" placeholder="Search" aria-label="Search" />
        <button type="submit" class="search-btn">
          <img src={search}/>
        </button>
      </form>
      <button class="mic-btn" title="Search with your voice">
        <img src={mic}/>
      </button>
      <div class="header-btns">
        <a href="#" title="Create">
          <img src={cam} alt="Upload Video"/>
        </a>
        <a href="#" title="Youtube Apps">
          <img src={grid} alt="Apps"/>
        </a>
        <a href="#" title="Notifications">
          <img src={bell} alt="Notifications"/>
        </a>
        <a href="#">
          <img class="header-channel" src="http://unsplash.it/36/36?gravity=center" alt="Your Channel"/>
        </a>
      </div>
    </header>
  );
  }
}

export default Headr;
