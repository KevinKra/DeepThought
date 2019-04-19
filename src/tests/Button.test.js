import React from "react";
import { shallow } from "enzyme";
import toJson from "enzyme-to-json";
import Button from "../components/Button";

const defaultState = {};

describe("<Button />", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<Button />);
  });
  it("should match the snapshot", () => {
    expect(toJson(wrapper)).toMatchSnapshot();
  });
  it("should match default state", () => {
    expect(wrapper.state()).toEqual(defaultState);
  });
  // it("should be disabled if submitStatus prop is false", () => {
  //test that submitStatus function is called
  // expect(wrapper.instance().props.submitStatus).toBe(true);

  //test that submitStatus results in button being disabled

  //onClick invoke buttonPath
  //   wrapper.find("button").simulate("click");
  // });
});
