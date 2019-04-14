import React from "react";
import "../styles/_CardSlideshow.scss";

import CardTopic from "./CardTopic";
class CardSlideshow extends React.Component {
  render() {
    return (
      <section className="card-slide-show">
        <CardTopic
          topic="CSS"
          blurb="Styles fundamentals"
          history={this.props.history}
        />
        <CardTopic
          topic="HTML"
          blurb="<p>Learn Tags!</p>"
          history={this.props.history}
        />
        <CardTopic
          topic="Functions"
          blurb="Check out these functions."
          history={this.props.history}
        />
        <CardTopic
          topic="OOP"
          blurb="Object Oriented Guide"
          history={this.props.history}
        />
        <CardTopic
          topic="JavaScript"
          blurb="Learn JavaScript!"
          history={this.props.history}
        />
        <CardTopic
          topic="React"
          blurb="React Foundations"
          history={this.props.history}
        />
        <div className="blur-screen" />
      </section>
    );
  }
}

export default CardSlideshow;
