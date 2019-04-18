import React, { Component } from "react";
import CardSlideshow from "./CardSlideshow";
import NavBar from "./NavBar";
import UserSection from "./UserSection";
import ReviewPage from "./ReviewPage";
import NotFound from "./NotFound";
import "../styles/_MainPage.scss";

class MainPage extends Component {
  constructor() {
    super();
    this.state = {
      displayReviewPage: false,
      displayNotFoundPage: false,
      displayMainPage: true
    };
  }
  componentDidMount() {
    fetch(
      "https://fe-apps.herokuapp.com/api/v1/memoize/1901/kevinkra/topicreact"
    )
      .then(res => res.json())
      .then(data => console.log(data))
      .then(data => this.props.onCollectAllCards(data))
      .catch(err => console.log("ERROR ", err));
  }

  renderNotFoundPage = () => {
    this.setState({
      displayReviewPage: false,
      displayNotFoundPage: true,
      displayMainPage: false
    });
  };

  renderReviewPage = () => {
    this.setState({
      displayReviewPage: true,
      displayNotFoundPage: false,
      displayMainPage: false
    });
  };

  renderMainPage = () => {
    this.setState({
      displayReviewPage: false,
      displayNotFoundPage: false,
      displayMainPage: true
    });
  };

  render() {
    const mainPage = (
      <div className="mainPage">
        <NavBar renderLoginPage={this.props.returnToLogin} />
        <CardSlideshow
          renderReview={this.renderReviewPage}
          renderNotFound={this.renderNotFoundPage}
        />
        <UserSection userName={this.props.userName} />
      </div>
    );
    const renderPath = () => {
      if (this.state.displayReviewPage) {
        return (
          <ReviewPage
            renderLoginPage={this.props.returnToLogin}
            renderMainPage={this.renderMainPage}
          />
        );
      } else if (this.state.displayNotFoundPage) {
        return <NotFound />;
      } else if (this.state.displayMainPage) {
        return mainPage;
      } else {
        alert("Perhaps return to login page if possible?");
      }
    };

    return <React.Fragment>{renderPath()}</React.Fragment>;
  }
}

export default MainPage;
