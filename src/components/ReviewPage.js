import React from "react";
import NavBar from "./NavBar";
import "../styles/_ReviewPage.scss";
class ReviewPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <main className="window">
        <NavBar />
        <section className="content-section">
          <section className="question-card">
            <article className="question">
              {
                "In what case are React events, composite components, and DOM attributes written?"
              }
            </article>
            <form className="question-form">
              <label>
                {"Enter Guess Here"}
                <textarea />
              </label>
              <button type="submit">SUBMIT</button>
            </form>
          </section>
          <section className="answer-card">
            <article className="answer">{this.props.question}</article>
            <form>
              <button type="submit">Got it!</button>
              <button type="submit">Need more practice.</button>
            </form>
          </section>
        </section>
      </main>
    );
  }
}

export default ReviewPage;
