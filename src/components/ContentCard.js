import React from "react";
import "../styles/_ContentCard.scss";
import CardTextArea from "./CardTextArea";
import Button from "./Button";
class ContentCard extends React.Component {
  constructor() {
    super();
    this.state = {};
  }
  render() {
    const answerCard = (
      <section className="content-card">
        <h2>{this.props.title}</h2>
        <article className="content">{this.props.text}</article>
        <div className="button-container">
          <Button name={"Got it!"} />
          <Button name={"More practice!"} />
        </div>
      </section>
    );

    const questionCard = (
      <section className="content-card">
        <h2>{this.props.title}</h2>
        <article className="content">{this.props.text}</article>
        <CardTextArea label="Enter Guess Here" />
      </section>
    );

    return (
      <React.Fragment>
        {this.props.title === "Question" ? questionCard : answerCard}
      </React.Fragment>
    );
  }
}

export default ContentCard;
