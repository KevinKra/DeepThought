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
    return (
      <section className="content-card">
        <h2>{this.props.title}</h2>
        <article className="content">{this.props.text}</article>
        {this.props.title === "Question" ? (
          <CardTextArea label="Enter Guess Here" />
        ) : (
          <div className="button-container">
            <Button name={"Got it!"} />
            <Button name={"More practice!"} />
          </div>
        )}
      </section>
    );
  }
}

export default ContentCard;
