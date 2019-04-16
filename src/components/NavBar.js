import React from "react";
import "../styles/_NavBar.scss";
class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  SignOut = e => {
    e.preventDefault();
    this.props.history.push(`/`);
  };
  toProfile = e => {
    e.preventDefault();
  };
  toMain = e => {
    e.preventDefault();
    this.props.history.push(`/main/1`);
  };
  renderMain = () => {
    return (
      <button
        className="btn"
        history={this.props.history}
        onClick={this.toMain}
      >
        <p href="">Main Page</p>
      </button>
    );
  };
  render() {
    return (
      <header className="navBar">
        <h1 className="mainHeader">ThinkDeeper</h1>
        <form className="navLinks">
          <button
            className="btn"
            history={this.props.history}
            onClick={this.toProfile}
          >
            <p href="">Profile</p>
          </button>
          {this.props.mainLink ? this.renderMain() : null}
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
