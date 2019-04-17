import React from "react";
import NavBar from "./NavBar";
import "../styles/_ReviewPage.scss";
import ContentCard from "./ContentCard";
import { connect } from "react-redux";
import { updateAllCards } from "../redux/actions/card-actions";
import { collectAllCards } from "../redux/actions/card-actions";

class ReviewPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      order: 0,
      hasBeenClicked: false
    };
  }

  resetList = () => {
    const order = this.props.cards.TopicReact.indexOf(
      this.props.cards.TopicReact.find(card => {
        return !card.understood;
      })
    );
    this.setState({
      order: order
    });
  };

  handleClick = e => {
    e.preventDefault();
    this.setState({
      hasBeenClicked: true
    });
  };

  resetList = () => {
    const order = this.props.cards.TopicReact.indexOf(
      this.props.cards.TopicReact.find(card => {
        return !card.understood;
      })
    );
    this.setState({
      order: order
    });
  };

  nextQuestion() {
    const { TopicReact } = this.props.cards;
    const order = TopicReact.indexOf(
      TopicReact.find(
        (card, i) => this.state.order + 1 <= i && !card.understood
      )
    );
    this.setState({
      order: order,
      hasBeenClicked: false
    });
  }

  handleAnswerResponse = (e, response) => {
    e.preventDefault();
    const cards = [...this.props.cards.TopicReact];
    cards[this.state.order].understood = response;
    this.props.updateAllCards(cards);

    if (this.props.cards.TopicReact.every(card => card.understood)) {
      return;
    }
    this.state.order + 1 === this.props.cards.TopicReact.length
      ? this.resetList()
      : this.nextQuestion();
  };
  componentDidMount() {
    fetch(
      "https://fe-apps.herokuapp.com/api/v1/memoize/1901/kevinkra/topicreact"
    )
      .then(res => res.json())
      // .then(res => console.log(res))
      .then(data => this.props.collectAllCards(data))
      .catch(err => console.log("ERROR ", err));
  }

  render() {
    // console.log("currentCard", this.props.cards.TopicReact);
    if (!this.props.cards.TopicReact) {
      return null;
    }
    const currentCard = this.props.cards.TopicReact[this.state.order];
    return (
      <main className="window-reviewPage">
        <NavBar history={this.props.history} mainLink={true} />{" "}
        <section className="content-section">
          <ContentCard
            title="Question"
            handleClick={this.handleClick}
            text={currentCard.question}
          />{" "}
          <ContentCard
            title="Answer"
            submitStatus={this.state.hasBeenClicked}
            handleAnswer={this.handleAnswerResponse}
            text={currentCard.answer}
          />{" "}
        </section>{" "}
      </main>
    );
  }
}

const mapStateToProps = state => ({
  cards: state.cards
});

const mapActionsToProps = {
  collectAllCards: collectAllCards,
  updateAllCards: updateAllCards
};

//higher order component
export default connect(
  mapStateToProps,
  mapActionsToProps
)(ReviewPage);
