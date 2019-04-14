import React from "react";
import "../styles/_NavBar.scss";
class NavBar extends React.Component {
  toSignOut = React.createRef();
  SignOut = e => {
    e.preventDefault();
    this.props.history.push(`/`);
  };
  toProfile = e => {
    e.preventDefault();
  };
  render() {
    return (
      <header className="navBar">
        <h1 className="mainHeader">ThinkDeeper</h1>
        <form className="navLinks">
          {/* conditional main button */}
          <button
            className="btn"
            history={this.props.history}
            onClick={this.toProfile}
          >
            <p href="">Profile</p>
          </button>
          <button
            className="btn"
            history={this.props.history}
            onClick={this.SignOut}
          >
            <p>Sign Out</p>
          </button>
        </form>
      </header>
    );
  }
}

export default NavBar;
