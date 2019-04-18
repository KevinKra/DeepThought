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
      failedCards: [],
      order: 0,
      hasBeenClicked: false,
      restartPrompt: false
    };
  }

  localStorage = () => {
    return (
      localStorage.getItem("failedCards") &&
      this.setState({
        failedCards: JSON.parse(localStorage.getItem("failedCards"))
      })
    );
  };

  fetchData = () => {
    fetch(
      "https://fe-apps.herokuapp.com/api/v1/memoize/1901/kevinkra/topicreact"
    )
      .then(res => res.json())
      .then(data => this.collectAllCards(data))
      .catch(err => console.log("ERROR ", err));
  };

  componentDidMount() {
    // may need to detect if localStore .length or [] is true
    if (localStorage.getItem("failedCards")) {
      this.fetchData();
    } else {
      this.localStorage();
    }
  }

  componentWillUpdate(nextProps, nextState) {
    localStorage.setItem("failedCards", JSON.stringify(nextState.failedCards));
  }

  collectAllCards = data => {
    this.setState({ totalCards: data });
  };

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

  // every time you submit guess run a function
  // this function filters out the cards if they're true
  // then set it to state and invoke an anonymous function that stores that state to local storage
  // this.setState({array : []}, () => {} ) set to local storage

  handleResponse = type => {
    const allCards = this.state.totalCards.TopicReact;
    const currentCardIndex = this.state.order;
    const newOrderNum = currentCardIndex + 1;
    console.log(newOrderNum);
    if (newOrderNum === 30) {
      console.log("WAIT!!!");
      this.setState({ restartPrompt: true });
    }
    if (type === "GOT IT") {
      // console.log("Review-level got it");
      this.setState({ order: newOrderNum, hasBeenClicked: false });
      // , hasBeenClicked: false
      allCards[currentCardIndex].understood = true;
    } else {
      // console.log("Review-level more practice");
      const currentCard = allCards[currentCardIndex];
      const newFailedCards = this.state.failedCards || [];
      newFailedCards.push(currentCard);
      this.setState({
        order: newOrderNum,
        hasBeenClicked: false,
        failedCards: newFailedCards
      });

      allCards[currentCardIndex].understood = false;
    }
  };

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
                handleResponse={this.handleResponse}
                renderCard={this.renderCard}
              />
              <ContentCard
                title="Answer"
                submitStatus={this.state.hasBeenClicked}
                handleResponse={this.handleResponse}
                renderCard={this.renderCard}
              />
            </React.Fragment>
          ) : (
            <Prompt
              restartPrompt={this.state.restartPrompt}
              renderMainPage={this.props.renderMainPage}
            />
          )}
        </section>
      </main>
    );
  }
}

export default ReviewPage;
