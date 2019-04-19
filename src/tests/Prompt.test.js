import React from "react";
import { shallow } from "enzyme";
import toJson from "enzyme-to-json";
import Prompt from "../components/Prompt";

const defaultState = {};

describe("<Prompt />", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<Prompt />);
  });
  it("should match the snapshot", () => {
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
