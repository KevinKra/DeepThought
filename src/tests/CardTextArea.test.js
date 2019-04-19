import React from "react";
import { shallow } from "enzyme";
import toJson from "enzyme-to-json";
import CardTextArea from "../components/CardTextArea";

const defaultState = {};

describe("<CardTextArea />", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<CardTextArea />);
  });
  it("should match the snapshot", () => {
    expect(toJson(wrapper)).toMatchSnapshot();
  });
  it("should match default state", () => {
    expect(wrapper.state()).toEqual(defaultState);
  });
  // it("should invoke the handleClick method when the button is clicked", () => {
  //   wrapper.instance().props.handleClick = jest.fn();
  //   expect(wrapper.find("button").exists()).toBe(true);
  //   wrapper.find("button").simulate("click");
  //   expect(wrapper.instance().props.handleClick).toHaveBeenCalled();
    //--- handleClick lives in ReviewPage component
    // const baseProps = {
    //   this.setState({
    //     hasBeenClicked: true
    //   }),
    //   trackEvent: jest.fn(),
    // };
  // });
});
