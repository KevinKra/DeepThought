import React from "react";
import { shallow } from "enzyme";
import toJson from "enzyme-to-json";
import CardSlideShow from "../components/CardSlideShow";

const defaultState = {};

describe("<CardSlideShow />", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<CardSlideShow />);
  });
  it("should match the snapshot", () => {
    expect(toJson(wrapper)).toMatchSnapshot();
  });
  it("should match default state", () => {
    expect(wrapper.state()).toEqual(defaultState);
  });
});
