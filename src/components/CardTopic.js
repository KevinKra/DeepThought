import React from "react";
import "../styles/_CardTopic.scss";

class CardTopic extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      topic: this.props.topic
    };
  }
  handleClick = () => {
    this.state.topic === "React"
      ? this.props.renderReview()
      : this.props.renderNotFound();
  };
  render() {
    return (
      <section className="card-topic" onClick={this.handleClick}>
        <h1 className="card-title">{this.props.topic}</h1>
        <p className="card-body">{this.props.blurb}</p>
      </section>
    );
  }
}

export default CardTopic;
