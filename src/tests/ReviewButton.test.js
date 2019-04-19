import React from "react";
import { shallow } from "enzyme";
import toJson from "enzyme-to-json";
import ReviewButton from "../components/ReviewButton";

const mockPurpose = "questionCard";

describe("<ReviewButton />", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<ReviewButton />);
  });
  it("should match the snapshot", () => {
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
