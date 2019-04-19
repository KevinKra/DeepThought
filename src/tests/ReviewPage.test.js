import React from "react";
import { shallow } from "enzyme";
import toJson from "enzyme-to-json";
import ReviewPage from "../components/ReviewPage";

const mockCard = {
  id: 1,
  question: "What is JSX?",
  answer: "A JavaScript extension that imitates HTML",
  understood: false,
  reference: "https://reactjs.org/docs/introducing-jsx.html",
  timesPassed: 0,
  flagged: false
};

const mockFetchData = jest.fn();

const defaultState = {
  totalCards: [],
  failedCards: [],
  order: 0,
  hasBeenClicked: false,
  restartPrompt: false
};

describe("<ReviewPage />", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<ReviewPage />);
  });
  it("should match the snapshot", () => {
    expect(toJson(wrapper)).toMatchSnapshot();
  });
  it("should match default state", () => {
    expect(wrapper.state()).toEqual(defaultState);
  });
  // it("should update the totalCard array", () => {
  //   expect(wrapper.state().totalCards).toEqual([]);
  //   expect(mockFetchData).toBeCalled();
  // });
  // it("should display an answer card", () => {
  //   const wrapper = shallow(<ReviewPage />);
  //   expect(wrapper.instance().renderCard("answer")).toEqual(mockCard.answer);
  // });
});
