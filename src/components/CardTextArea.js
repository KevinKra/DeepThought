import React from "react";
import "../styles/_CardTextArea.scss";
class CardTextArea extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <form className="cardTextArea-form">
        <label>
          {this.props.label}
          <textarea />
        </label>
        <button onClick={this.props.handleClick} type="submit">
          SUBMIT
        </button>
      </form>
    );
  }
}

export default CardTextArea;
