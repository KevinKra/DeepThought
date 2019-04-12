import React from "react";
import "../styles/_CardSlideshow.scss";

import CardTopic from "./CardTopic";

const CardSlideshow = () => {
  return (
    <section className="cardSlideShow">
      <CardTopic />
      <CardTopic />
      <CardTopic />
      <CardTopic />
      <CardTopic />
      <CardTopic />
      <div className="blurScreen" />
    </section>
  );
};

export default CardSlideshow;
