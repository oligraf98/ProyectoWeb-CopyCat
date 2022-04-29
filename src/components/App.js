import React, { Component } from 'react';
import Videos from './Videos.js';
import Categories from './Categories.js';
import Headr from './Headr.js';

class App extends Component {
  render(){
    return(
    <div>
      <Headr/>
      <Categories/>
      <Videos/>
    </div>
  );
  }
}

export default App;
