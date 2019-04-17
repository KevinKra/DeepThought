import React from "react";
import "../styles/_UserSection.scss";
import UserCard from "./UserCard";
class UserSection extends React.Component {
  render() {
    return (
      <section className="userSection">
        <h2 className="userGreeting">{`Welcome, ${this.props.userName}!`}</h2>
        {/* <article>
          <UserCard />
        </article> */}
      </section>
    );
  }
}

export default UserSection;
