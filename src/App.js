import React, { Component } from "react";
import Travels from "./Travels";
import "./Travel.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1 className="App-title">Travel around the world</h1>
        <Travels/>
        
      
      </div>
    );
  }
}

export default App;