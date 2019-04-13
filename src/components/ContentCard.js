import React from "react";
import "../styles/_ContentCard.scss";
class ContentCard extends React.Component {
  constructor() {
    super();
    this.state = {};
  }
  render() {
    return (
      <section className="question-card">
        <h2>{this.props.title}</h2>
        <article className="question">{this.props.text}</article>
        <form className="question-form">
          <label>
            {"Enter Guess Here"}
            <textarea />
          </label>
          <button type="submit">SUBMIT</button>
        </form>
      </section>
    );
  }
}

export default ContentCard;
