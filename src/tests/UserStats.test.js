import React from "react";
import { shallow } from "enzyme";
import toJson from "enzyme-to-json";
import UserStats from "../components/UserStats";

describe("<UserStats />", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<UserStats />);
  });
  it("should match the snapshot", () => {
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
