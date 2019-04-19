import React from "react";
import { shallow } from "enzyme";
import toJson from "enzyme-to-json";
import NavBar from "../components/NavBar";

const defaultState = {};

describe("<NavBar />", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<NavBar />);
  });
  it("should match the snapshot", () => {
    expect(toJson(wrapper)).toMatchSnapshot();
  });
  it("should match default state", () => {
    expect(wrapper.state()).toEqual(defaultState);
  });
});
