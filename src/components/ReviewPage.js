import React from "react";
import NavBar from "./NavBar";
import "../styles/_ReviewPage.scss";
import ContentCard from "./ContentCard";
import { connect } from "react-redux";

class ReviewPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      order: 0,
      hasBeenClicked: false
    };
  }

  handleClick = e => {
    e.preventDefault();
    this.setState({ hasBeenClicked: true });
  };

  handleAnswerResponse = (e, response) => {
    e.preventDefault();
    // response ? console.log("true") : console.log("false");

    //default state
    this.setState({ hasBeenClicked: false });

    this.state.order + 1 === this.props.cards.TopicReact.length
      ? console.log("works")
      : this.setState({ order: this.state.order + 1 });

    //if click GOT IT
    //update state tree --> current card's understood = true

    // const cards = [...this.props.cards.TopicReact];
    // thisarray.find()

    //if click NEED REVIEW
    //leave to understood = false
  };

  render() {
    const currentCard = this.props.cards.TopicReact[this.state.order];
    return (
      <main className="window-reviewPage">
        <NavBar history={this.props.history} mainLink={true} />
        <section className="content-section">
          <ContentCard
            title="Question"
            handleClick={this.handleClick}
            text={currentCard.question}
          />
          <ContentCard
            title="Answer"
            submitStatus={this.state.hasBeenClicked}
            handleAnswer={this.handleAnswerResponse}
            text={currentCard.answer}
          />
        </section>
      </main>
    );
  }
}

const mapStateToProps = state => ({
  cards: state.cards
});

//higher order component
export default connect(
  mapStateToProps
  // mapActionsToProp
)(ReviewPage);
