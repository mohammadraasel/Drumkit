import React, { Component } from 'react';
import './App.css';
import Drumkit from './Drumkit';

class App extends Component {
  constructor(props){
    super(props)
    this.keys= [
      {code:65, letter:'A', sound:'clap'},
      {code:83, letter:'S', sound:'hihat'},
      {code:68, letter:'D', sound:'kick'},
      {code:70, letter:'F', sound:'openhat'},
      {code:71, letter:'G', sound:'boom'},
      {code:72, letter:'H', sound:'ride'},
      {code:74, letter:'J', sound:'snare'},
      {code:75, letter:'K', sound:'tom'},
      {code:76, letter:'L', sound:'tink'}
    ]
    this.state = {
      
    }
  }
  render() {
    return (
      <div className="App">
        <Drumkit keys = {this.keys}/>
      </div>
    );
  }
}

export default App;
