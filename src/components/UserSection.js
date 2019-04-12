import React from "react";
import "../styles/_UserSection.scss";
import userCard from "./UserCard";
import UserCard from "./UserCard";
class UserSection extends React.Component {
  render() {
    return (
      <section className="userSection">
        <h2>UserName</h2>
        <article>
          <UserCard />
          <UserCard />
          <UserCard />
        </article>
      </section>
    );
  }
}

export default UserSection;
