import React from "react";
import "../styles/_CardSlideshow.scss";

import CardTopic from "./CardTopic";

const CardSlideshow = () => {
  return (
    <section className="card-slide-show">
      <CardTopic topic="CSS" blurb="Styles fundamentals" />
      <CardTopic topic="HTML" blurb="<p>Learn Tags!</p>" />
      <CardTopic topic="Functions" blurb="Check out these functions." />
      <CardTopic topic="OOP" blurb="Object Oriented Guide" />
      <CardTopic topic="JavaScript" blurb="Learn JavaScript!" />
      <CardTopic topic="React" blurb="React Foundations" />
      <div className="blur-screen" />
    </section>
  );
};

export default CardSlideshow;
