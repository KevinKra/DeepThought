import React from "react";
import "../styles/_LoginPage.scss";
import { getFunName } from "../helpers";
class LoginPage extends React.Component {
  myInput = React.createRef();

  goToMainPage = e => {
    e.preventDefault();
    const urlName = this.myInput.current.value;
    this.props.history.push(`/main/${urlName}`);
    // console.log(this.myInput.current.value);
  };
  render() {
    return (
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
    );
  }
}

export default LoginPage;
