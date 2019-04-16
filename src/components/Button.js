import React from "react";
import "../styles/_Button.scss";
class Button extends React.Component {
  constructor() {
    super();
    this.state = {};
  }
  render() {
    return <button className="btn-2">{this.props.name}</button>;
  }
}

export default Button;
