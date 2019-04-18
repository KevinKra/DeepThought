import React from "react";
import NavBar from "./NavBar";
import "../styles/_ReviewPage.scss";
import ContentCard from "./ContentCard";
import Prompt from "./Prompt";

class ReviewPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      order: 0,
      hasBeenClicked: false,
      restartPrompt: false
    };
  }

  detectOrderNum = () => {
    console.log(this.state.order);
    if (this.state.order === 29) {
      this.setState({ restartPrompt: true });
    }
  };

  toMain = e => {
    e.preventDefault();
  };

  resetList = () => {};

  handleClick = e => {
    e.preventDefault();
    this.setState({
      hasBeenClicked: true
    });
  };

  resetList = () => {};

  nextQuestion() {}

  handleAnswerResponse = e => {
    e.preventDefault();
  };

  render() {
    if (!this.state.restartPrompt) {
    }
    return (
      <main className="window-reviewPage">
        <NavBar
          renderLoginPage={this.props.returnToLogin}
          renderMainPage={this.props.renderMainPage}
          mainLink={true}
        />
        <section className="content-section">
          {!this.state.restartPrompt ? (
            <React.Fragment>
              <ContentCard
                title="Question"
                handleClick={this.handleClick}
                // text={currentCard.question}
              />
              <ContentCard
                title="Answer"
                submitStatus={this.state.hasBeenClicked}
                handleAnswer={this.handleAnswerResponse}
                detectOrderNum={this.detectOrderNum}
                // text={currentCard.answer}
              />
            </React.Fragment>
          ) : (
            <Prompt
              restartPrompt={this.state.restartPrompt}
              toMain={this.toMain}
            />
          )}
        </section>
      </main>
    );
  }
}

export default ReviewPage;
