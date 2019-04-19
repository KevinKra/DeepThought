import React from "react";
import "../styles/_Prompt.scss";

class Prompt extends React.Component {
  clearAndMainPage = () => {
    localStorage.clear();
    this.props.renderMainPage();
  };

  render() {
    return (
      <article className="content-card">
        <h1>All cards reviewed!</h1>
        <div className="button-container">
          {!localStorage.failedCards.length > 2 ? (
            <button className="btn-2" onClick={this.props.renderMainPage}>
              Exit and Save
            </button>
          ) : null}
          <button className="btn-2" onClick={this.clearAndMainPage}>
            Exit and Clear
          </button>
        </div>
      </article>
    );
  }
}

export default Prompt;
