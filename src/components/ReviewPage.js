import React from "react";
import NavBar from "./NavBar";
import "../styles/_ReviewPage.scss";
import ContentCard from "./ContentCard";
import Prompt from "./Prompt";

class ReviewPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      totalCards: [],
      order: 0,
      hasBeenClicked: false,
      restartPrompt: false
    };
  }

  componentDidMount() {
    fetch(
      "https://fe-apps.herokuapp.com/api/v1/memoize/1901/kevinkra/topicreact"
    )
      .then(res => res.json())
      .then(data => this.collectAllCards(data))
      .catch(err => console.log("ERROR ", err));
  }

  collectAllCards = data => {
    this.setState({ totalCards: data });
  };

  // dispatchCards = () => {
  //   if (!this.state.totalCards.length === 0) {
  //     return true
  //   }
  // }

  //1.)Iterate through all understood:false cards one at a time
  renderCard = cardType => {
    const allCards = this.state.totalCards.TopicReact;
    if (allCards === undefined) {
      console.log("loading");
    } else {
      // console.log(allCards);
      // console.log("cardType:", cardType);
      if (cardType === "answerCard") {
        return allCards[this.state.order].answer;
      } else {
        return allCards[this.state.order].question;
      }
    }
  };

  //2.)Display current question in question card, answer in answer card

  //3.)OnSubmit click, render answer card answer

  //4.)on GOT IT! change understood to true

  //5.)on More Practice! change understood to false

  //6.)iterate through all cards

  //7.)once length reached, restart with understood:false or exit to main --if exit to main set all to understood:false

  //-- optional: reset cards. All set to understood:false.

  resetList = () => {};

  handleClick = e => {
    e.preventDefault();
    this.setState({
      hasBeenClicked: true
    });
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
                renderCard={this.renderCard}
                // text={currentCard.question}
              />
              <ContentCard
                title="Answer"
                submitStatus={this.state.hasBeenClicked}
                handleAnswer={this.handleAnswerResponse}
                detectOrderNum={this.detectOrderNum}
                renderCard={this.renderCard}
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
