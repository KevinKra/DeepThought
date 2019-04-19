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

  accessLocalStorage = () => {
    console.log("failedCards = 1 => :", this.state.failedCards);
    this.setState({
      failedCards: JSON.parse(localStorage.getItem("failedCards"))
    });
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
    this.setState({ order: 0 });
    if (JSON.parse(localStorage.getItem("failedCards"))) {
      console.log("failedCards = 2 => :", this.state.failedCards);
      this.accessLocalStorage();
    } else {
      this.fetchData();
    }
  }

  componentDidUpdate() {
    const currentFailedCards = this.state.failedCards.filter(card => {
      return card.understood === false;
    });
    console.log("CF:", currentFailedCards);
    console.log("failedCards = 3 => :", this.state.failedCards);

    if (this.state.failedCards.length) {
      localStorage.setItem("failedCards", JSON.stringify(currentFailedCards));
    }
  }

  collectAllCards = data => {
    this.setState({ totalCards: data });
  };

  renderCard = cardType => {
    const allCards = this.state.totalCards.TopicReact || this.state.failedCards;
    if (allCards === undefined) {
      console.log("loading");
    } else {
      if (
        cardType === "answerCard" &&
        allCards.length !== 0 &&
        this.state.order + 1 <= allCards.length
      ) {
        return allCards[this.state.order].answer;
      } else if (
        cardType === "questionCard" &&
        allCards.length !== 0 &&
        this.state.order + 1 <= allCards.length
      ) {
        return allCards[this.state.order].question;
      } else if (
        allCards.length !== 0 &&
        this.state.order + 1 >= allCards.length
      ) {
        this.setState({ restartPrompt: true });
      }
    }
  };

  handleResponse = type => {
    const allCards = this.state.totalCards.TopicReact || this.state.failedCards;
    const currentCardIndex = this.state.order;
    const newOrderNum = currentCardIndex + 1;
    if (newOrderNum === 30) {
      this.setState({ restartPrompt: true, order: 0 });
    }
    if (type === "GOT IT") {
      this.setState({ order: newOrderNum, hasBeenClicked: false });
      allCards[currentCardIndex].understood = true;
    } else {
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
          renderLoginPage={this.props.renderLoginPage}
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
