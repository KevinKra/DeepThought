import React from "react";
import "../styles/_CardTopic.scss";

const CardTopic = props => {
  return (
    <section className="card-topic">
      <h1 className="card-title">{props.topic}</h1>
      <p className="card-body">{props.blurb}</p>
    </section>
  );
};

export default CardTopic;
