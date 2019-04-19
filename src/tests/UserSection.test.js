import React from "react";
import { shallow } from "enzyme";
import toJson from "enzyme-to-json";
import UserSection from "../components/UserSection";

describe("<UserSection />", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<UserSection />);
  });
  it("should match the snapshot", () => {
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
