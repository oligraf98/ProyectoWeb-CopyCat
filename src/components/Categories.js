import React, { Component } from 'react';


class Categories extends Component {
  render(){
    return(
    <div class ="categories">
      <section class="categories-box">
        <button class="category active">All</button>
        <button class="category">React</button>
        <button class="category">Webpack & Babel</button>
        <button class="category">Synthesizers</button>
        <button class="category">Johnny Depp</button>
        <button class="category">JavaScript</button>
        <button class="category">CSS & SASS</button>
        <button class="category">Wild Rift</button>
        <button class="category">Minecraft</button>
        <button class="category">Gaming</button>
        <button class="category">Mods</button>
        <button class="category">Plugins</button>
        <button class="category">VSTs</button>
        <button class="category">Ableton</button>
        <button class="category">Live</button>
      </section>
    </div>
  );
  }
}

export default Categories;
