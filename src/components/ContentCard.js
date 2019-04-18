import React from "react";
import "../styles/_ContentCard.scss";
import CardTextArea from "./CardTextArea";
import Button from "./Button";
class ContentCard extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  componentDidMount() {
    if (this.props) this.setState({});
  }

  render() {
    const answerCard = (
      <section className="content-card">
        <h2>{this.props.title}</h2>
        {this.props.submitStatus ? (
          <article className="content">
            {this.props.renderCard("answerCard")}
          </article>
        ) : (
          <article className="content">{null}</article>
        )}
        <div className="button-container">
          <Button
            submitStatus={this.props.submitStatus}
            handleAnswer={this.props.handleAnswer}
            detectOrderNum={this.props.detectOrderNum}
            name={"Got it!"}
          />
          <Button
            submitStatus={this.props.submitStatus}
            detectOrderNum={this.props.detectOrderNum}
            handleAnswer={this.props.handleAnswer}
            name={"More practice!"}
          />
        </div>
      </section>
    );

    const questionCard = (
      <section className="content-card">
        <h2>{this.props.title}</h2>
        <article className="content">
          {this.props.renderCard("questionCard")}
        </article>
        <CardTextArea
          handleClick={this.props.handleClick}
          label="Enter Guess Here"
        />
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
