import React from "react";
import "../styles/_Button.scss";
class Button extends React.Component {
  constructor() {
    super();
    this.state = {};
  }
  render() {
    return (
      <button
        onClick={e => this.props.handleAnswer(e, this.props.name === "Got it!")}
        disabled={!this.props.submitStatus}
        className="btn-2"
      >
        {this.props.name}
      </button>
    );
  }
}

export default Button;
