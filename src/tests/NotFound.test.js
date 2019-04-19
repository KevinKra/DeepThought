import React from "react";
import { shallow } from "enzyme";
import toJson from "enzyme-to-json";
import NotFound from "../components/NotFound";

describe("<NotFound />", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<NotFound />);
  });
  it("should match the snapshot", () => {
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
