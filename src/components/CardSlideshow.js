import React from "react";
import "../styles/_CardSlideshow.scss";

import CardTopic from "./CardTopic";
class CardSlideshow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <section className="card-slide-show">
        <CardTopic
          topic="CSS"
          blurb="Styles fundamentals"
          renderReview={this.props.renderReview}
          renderNotFound={this.props.renderNotFound}
        />
        <CardTopic
          topic="HTML"
          blurb="<p>Learn Tags!</p>"
          renderReview={this.props.renderReview}
          renderNotFound={this.props.renderNotFound}
        />
        <CardTopic
          topic="Functions"
          blurb="Check out these functions."
          renderReview={this.props.renderReview}
          renderNotFound={this.props.renderNotFound}
        />
        <CardTopic
          topic="OOP"
          blurb="Object Oriented Guide"
          renderReview={this.props.renderReview}
          renderNotFound={this.props.renderNotFound}
        />
        <CardTopic
          topic="React"
          blurb="React Foundations"
          renderReview={this.props.renderReview}
          renderNotFound={this.props.renderNotFound}
        />
        <CardTopic
          topic="JavaScript"
          blurb="Learn JavaScript!"
          renderReview={this.props.renderReview}
          renderNotFound={this.props.renderNotFound}
        />
        <div className="blur-screen" />
      </section>
    );
  }
}

export default CardSlideshow;
