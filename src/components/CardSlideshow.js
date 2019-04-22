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
          topic="React"
          blurb="React Foundations"
          renderReview={this.props.renderReview}
          renderNotFound={this.props.renderNotFound}
        />
        <div className="blur-screen" />
      </section>
    );
  }
}

export default CardSlideshow;
