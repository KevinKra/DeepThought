import React from "react";
import "../styles/_LoginPage.scss";
class LoginPage extends React.Component {
  render() {
    return (
      <main className="window-login">
        <h1>ThinkDeeper</h1>
        <p> -- Think more deeply about your favorite topics -- </p>
        <section className="form-section">
          <form className="login">
            <label>
              {"UserName:"}
              <input type="text" placeholder=" Enter your name..." />
            </label>
            <button type="submit">Log In</button>
          </form>
        </section>
      </main>
    );
  }
}

export default LoginPage;
