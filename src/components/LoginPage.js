import React from "react";
import "../styles/_LoginPage.scss";
import { getFunName } from "../helpers";
//
import { connect } from "react-redux";
import { updateUser } from "../redux/actions/user-actions";
//

class LoginPage extends React.Component {
  myInput = React.createRef();

  goToMainPage = e => {
    e.preventDefault();
    const urlName = this.myInput.current.value;
    this.props.history.push(`/main/${urlName}`);
  };

  onUpdateUser = () => {
    this.props.onUpdateUser(this.myInput.current.value);
  };
  render() {
    console.log(this.props.user);
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
            <button onClick={this.onUpdateUser} type="submit">
              Log In
            </button>
          </form>
        </section>
      </main>
    );
  }
}

const mapStateToProps = state => ({
  user: state.user
});

const mapActionsToProps = {
  onUpdateUser: updateUser
};

// export default LoginPage;
export default connect(
  mapStateToProps,
  mapActionsToProps
)(LoginPage);
