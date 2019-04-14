import React, { Component } from "react";
import CardSlideshow from "./CardSlideshow";
import NavBar from "./NavBar";
import UserSection from "./UserSection";
import "../styles/_MainPage.scss";

class MainPage extends Component {
  render() {
    return (
      <main className="mainPage">
        <NavBar history={this.props.history} />
        <CardSlideshow />
        <UserSection />
      </main>
    );
  }
}

export default MainPage;
