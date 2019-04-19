import React from "react";
import { shallow } from "enzyme";
import toJson from "enzyme-to-json";
import CardTopic from "../components/CardTopic";

const mockTopic = "React";
const mockRenderReview = jest.fn();
const mockRenderNotFound = jest.fn();

const defaultState = {
  topic: mockTopic
};

describe("<CardTopic />", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<CardTopic topic="React" />);
  });
  it("should match the snapshot", () => {
    expect(toJson(wrapper)).toMatchSnapshot();
  });
  it("should match default state", () => {
    expect(wrapper.state()).toEqual(defaultState);
  });
  // it("should invoke renderReview if the local state topic equals 'React'", () => {
  //   wrapper = shallow(<CardTopic topic="React" />);
  //   wrapper.find("section").simulate("click");
  //   expect(wrapper.instance().mockHandleClick).toEqual(mockRenderReview);
  // });
});
