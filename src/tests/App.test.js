import React from "react";
import ReactDOM from "react-dom";
import App from "../components/App";
import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import toJson from "enzyme-to-json";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

const defaultState = {
  userName: ""
};

describe("<App />", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<App />);
  });
  it("Should render App", () => {
    console.log(wrapper.debug());
  });
  it("It matches the snapshot", () => {
    expect(toJson(wrapper)).toMatchSnapshot();
  });
  it("updateUserName method should update the userName local state when invoked", () => {
    expect(wrapper.state()).toEqual(defaultState);
    const mockUsername = "big-smelly-feet";
    wrapper.instance().updateUsername(mockUsername);
    expect(wrapper.state()).toEqual({ userName: mockUsername });
  });
});
