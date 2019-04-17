import React, { Component } from "react";
import CardSlideshow from "./CardSlideshow";
import NavBar from "./NavBar";
import UserSection from "./UserSection";
import "../styles/_MainPage.scss";
import { connect } from "react-redux";

class MainPage extends Component {
  render() {
    //retrieve props from state tree and pass into user section;
    console.log("username:", this.props.user);
    return (
      <main className="mainPage">
        <NavBar history={this.props.history} />
        <CardSlideshow history={this.props.history} />
        <UserSection userName={this.props.user} />
      </main>
    );
  }
}

const mapStateToProps = state => ({
  user: state.user
});

export default connect(
  mapStateToProps
  // mapActionsToProps
)(MainPage);
