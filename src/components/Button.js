import React from "react";
import "../styles/_Button.scss";
class Button extends React.Component {
  constructor() {
    super();
    this.state = {};
  }
  buttonPath = () => {
    if (this.props.name === "Got it!") {
      this.props.handleResponse("GOT IT");
      console.log("button-detect got it");
    } else {
      this.props.handleResponse("MORE PRACTICE");
      console.log("button-detect more practice");
    }
  };
  render() {
    return (
      <button
        onClick={this.buttonPath}
        disabled={!this.props.submitStatus}
        className="btn-2"
      >
        {this.props.name}
      </button>
    );
  }
}

export default Button;
