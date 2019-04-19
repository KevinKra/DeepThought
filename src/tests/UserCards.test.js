import React from "react";
import { shallow } from "enzyme";
import toJson from "enzyme-to-json";
import UserCard from "../components/UserCard";

describe("<UserCard />", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<UserCard />);
  });
  it("should match the snapshot", () => {
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
