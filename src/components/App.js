import React from "react";
import LoginPage from "./LoginPage";
class App extends React.Component {
  constructor() {
    super();
    this.state = {
      userName: ""
    };
  }

  updateUsername = newName => {
    this.setState({ userName: newName });
  };
  render() {
    return (
      <LoginPage
        updateUsername={this.updateUsername}
        userName={this.state.userName}
      />
    );
  }
}

export default App;
