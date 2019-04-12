import React from "react";
import "../styles/_NavBar.scss";
class NavBar extends React.Component {
  render() {
    return (
      <header className="navBar">
        <h1 className="mainHeader">DeepThought</h1>
        <div className="navLinks">
          {/* conditional main button */}
          <a href="">Main</a>
          <a href="">Profile</a>
        </div>
      </header>
    );
  }
}

export default NavBar;
