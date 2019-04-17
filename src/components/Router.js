import React from "react";
import MainPage from "./MainPage";
import ReviewPage from "./ReviewPage";
import LoginPage from "./LoginPage";
import NotFound from "./NotFound";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { connect } from "react-redux";
import { collectAllCards } from "../redux/actions/card-actions";

class Router extends React.Component {
  // componentDidMount() {
  //   fetch(
  //     "https://fe-apps.herokuapp.com/api/v1/memoize/1901/kevinkra/topicreact"
  //   )
  //     .then(res => res.json())
  //     // .then(res => console.log(res))
  //     .then(data => this.props.onCollectAllCards)
  //     .catch(err => console.log("ERROR ", err));
  // }
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={LoginPage} />
          <Route path="/main/:mainId" component={MainPage} />
          <Route path="/review/:cardId" component={ReviewPage} />
          <Route component={NotFound} />
        </Switch>
      </BrowserRouter>
    );
  }
}

//allows access to all dispatches to all reducers
const mapActionsToProps = {
  //onCollectAllCards is a prop now that exists in class Router
  onCollectAllCards: collectAllCards
};

export default connect(
  null,
  mapActionsToProps
)(Router);
// mapStateToProps,
// mapActionsToProps
