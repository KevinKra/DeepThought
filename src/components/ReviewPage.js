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
        <NavBar history={this.props.history} mainLink={true} />
        <section className="content-section">
          <ContentCard
            title="Question"
            text="Can you update a class's local state directly without using the setState method?"
          />
          <ContentCard
            title="Answer"
            text="No, setState not only updates the state of the component but also invokes the render method that updates the DOM."
          />
        </section>
      </main>
    );
  }
}

export default ReviewPage;
