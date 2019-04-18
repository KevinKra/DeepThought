import React from "react";
import "../styles/_Prompt.scss";

class Prompt extends React.Component {
  render() {
    return (
      <article className="content-card">
        <h1>All cards reviewed!</h1>
        <div className="button-container">
          <button className="btn-2" onClick={this.props.renderMainPage}>
            Exit
          </button>
        </div>
      </article>
    );
  }
}

export default Prompt;
