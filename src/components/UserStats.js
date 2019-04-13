import React from "react";
import ReviewButton from "./ReviewButton";
import "../styles/_UserStats.scss";
class UserStats extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      totalReviewed: this.props.statsTotalReviewed
    };
  }
  render() {
    return (
      <section className="user-stats">
        <article>Total cards Reviewed:{this.state.totalReviewed}</article>
        <ReviewButton purpose="Review Cards" />
        <ReviewButton purpose="Starred Cards" />
      </section>
    );
  }
}

export default UserStats;
