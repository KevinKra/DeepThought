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
    // console.log("hello");
    // console.log(this.props.history);
    this.props.history.push(`/review/review-${this.state.topic}`);
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
