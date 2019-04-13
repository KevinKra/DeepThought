import React from "react";
import NavBar from "./NavBar";
import "../styles/_ReviewPage.scss";
import ContentCard from "./ContentCard";
class ReviewPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <main className="window-reviewPage">
        <NavBar />
        <section className="content-section">
          <ContentCard title="Question" text="Can you update a class's local state directly without using the setState method?" />
          <ContentCard title="Answer" text="No, setState not only updates the state of the component but also invokes the render method that updates the DOM."/>
          {/* <section className="question-card">
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
          </section> */}
          {/* <section className="answer-card">
            <article className="answer">{this.props.question}</article>
            <form>
              <button type="submit">Got it!</button>
              <button type="submit">Need more practice.</button>
            </form>
          </section> */}
        </section>
      </main>
    );
  }
}

export default ReviewPage;
