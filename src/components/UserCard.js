import React from "react";
import "../styles/_UserCard.scss";
import UserStats from "./UserStats";
class UserCard extends React.Component {
  render() {
    return (
      <article className="userCard">
        <UserStats />
      </article>
    );
  }
}

export default UserCard;
