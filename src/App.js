import React, { Component } from "react";
import Travel from "./Travel";

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1 className="App-title">Travel around the world</h1>
        
        
        <Travel
          destination="Fjallraven"
          country="Sueeden"
          photo="https://images.unsplash.com/photo-1543166803-f0309083d510?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80"
        />
        <Travel
          destination="Lofoten"
          country="Norway"
          photo="https://images.unsplash.com/photo-1543651425-3260f9c9ecfb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80"
        />
      </div>
    );
  }
}

export default App;