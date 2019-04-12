import React from "react";
import "../styles/_NavBar.scss";
class NavBar extends React.Component {
  render() {
    return (
      <header className="navBar">
        <h1 className="mainHeader">ThinkDeeper</h1>
        <div className="navLinks">
          {/* conditional main button */}
          <button className="btn">
            <a href="">Profile</a>
          </button>
          <button className="btn">
            <a href="">Sign Out</a>
          </button>
        </div>
      </header>
    );
  }
}

export default NavBar;
