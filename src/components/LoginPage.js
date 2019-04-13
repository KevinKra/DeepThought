import React from "react";
import "../styles/_LoginPage.scss";
class LoginPage extends React.Component {
  render() {
    return (
      <main className="window">
        <section className="form-section">
          <h1>ThinkDeeper</h1>
          <form className="login">
            <label>
              {"UserName:"}
              <input type="text" placeholder="Enter your name..." />
            </label>
            <button type="submit">Log In</button>
          </form>
        </section>
      </main>
    );
  }
}

export default LoginPage;
