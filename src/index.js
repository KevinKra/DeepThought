import React from "react";
import ReactDOM from "react-dom";
import * as serviceWorker from "./serviceWorker";
import "./styles/index.scss";
import Router from "./components/Router";
import DataSet from "./DataSet";
import { combineReducers, createStore } from "redux";
import { Provider } from "react-redux";

import cardsReducer from "./redux/reducers/cards-reducer";
import userReducer from "./redux/reducers/user-reducer";
//import combineReducers redux method
const allReducers = combineReducers({
  cards: cardsReducer,
  user: userReducer
});

//these are our default values that we are passing in at the start
const store = createStore(
  allReducers,
  {
    cards: DataSet,
    user: "steven"
  },
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

////////--CREATING AN ACTION w/ type & payload, dispatching the action to the reducers, who then update the store accordingly.
// console.log(store.getState());

// //user action with type of "updateUser" and a payload object 'user: "Jonnas"';
// const updateUserAction = {
//   type: "updateUser",
//   payload: {
//     user: "Jonnas"
//   }
// };

// store.dispatch(updateUserAction);
////////

ReactDOM.render(
  <Provider store={store}>
    <Router />
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
