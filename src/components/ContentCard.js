import React from "react";
import "../styles/_ContentCard.scss";
import CardTextArea from "./CardTextArea";
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
        <CardTextArea label="Enter Guess Here" />
      </section>
    );
  }
}

export default ContentCard;
