import React from "react";
import "../styles/_LoginPage.scss";
import { getFunName } from "../helpers";
import MainPage from "./MainPage";

class LoginPage extends React.Component {
  constructor() {
    super();
    this.state = {
      renderMainPage: false
    };
  }
  myInput = React.createRef();

  goToMainPage = e => {
    e.preventDefault();
    this.props.updateUsername(this.myInput.current.value);
    this.setState({ renderMainPage: true });
  };

  returnToLogin = () => {
    localStorage.clear();
    this.setState({ renderMainPage: false });
  };

  render() {
    return (
      <div>
        {!this.state.renderMainPage ? (
          <React.Fragment>
            <main className="window-login">
              <h1>ThinkDeeper</h1>
              <p> -- Think more deeply about your favorite topics -- </p>
              <section className="form-section">
                <form className="login" onSubmit={this.goToMainPage}>
                  <label>
                    {"UserName:"}
                    <input
                      ref={this.myInput}
                      type="text"
                      placeholder=" Enter your name..."
                      defaultValue={getFunName()}
                    />
                  </label>
                  <button type="submit">Log In</button>
                </form>
              </section>
            </main>
          </React.Fragment>
        ) : (
          <MainPage
            userName={this.props.userName}
            renderLoginPage={this.returnToLogin}
          />
        )}
      </div>
    );
  }
}

export default LoginPage;
