import React, { Component } from "react";
import CardSlideshow from "./CardSlideshow";
import NavBar from "./NavBar";
import "../styles/_App.scss";

class App extends Component {
  render() {
    return (
      <main className="App">
        <NavBar />
        <CardSlideshow />
      </main>
    );
  }
}

export default App;
