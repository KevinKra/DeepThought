import React from "react";
import "../styles/_NavBar.scss";
class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  renderMain = () => {
    return (
      <button className="btn" onClick={this.props.renderMainPage}>
        <p>Main Page</p>
      </button>
    );
  };
  render() {
    return (
      <header className="navBar">
        <h1 className="mainHeader">ThinkDeeper</h1>
        <form className="navLinks">
          <button className="btn" onClick={this.toProfile}>
            <p>Profile</p>
          </button>
          {this.props.mainLink ? this.renderMain() : null}
          <button className="btn" onClick={this.returnToLogin}>
            <p>Sign Out</p>
          </button>
        </form>
      </header>
    );
  }
}

export default NavBar;
