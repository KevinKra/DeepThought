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

const mockData = [
  {
    id: 2,
    question: "What is Babel?",
    answer:
      "A compiler that converts ES6+ JavaScript code into a backwards compatible format for older environments.",
    understood: false,
    reference: "https://babeljs.io/docs/en/",
    timesPassed: 0,
    flagged: false
  },
  {
    id: 3,
    question: "How is Babel used in the React environment?",
    answer:
      "Babel converts JSX into 'React.createElement()' calls, which are then interpreted by React and converted into element objects that are displayed on the DOM.",
    understood: false,
    reference: "https://reactjs.org/docs/introducing-jsx.html",
    timesPassed: 0,
    flagged: false
  }
];

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

  it("should collect all cards", () => {
    expect(wrapper.state().totalCards).toEqual([]);
    wrapper.instance().collectAllCards(mockData);
    expect(wrapper.state().totalCards).toEqual(mockData);
  });

  it("handleClick", () => {
    expect(wrapper.state().hasBeenClicked).toEqual(false);
    wrapper
      .instance()
      .handleClick({ preventDefault: () => {} }, { target: { value: true } });
    expect(wrapper.state().hasBeenClicked).toEqual(true);
  });

  it("renderCard", () => {
    expect(wrapper.state().order).toEqual(0);
    const allCards = mockData || mockCard;
    wrapper.instance().renderCard();
    expect(allCards[wrapper.state().order].answer).toEqual(mockData[0].answer);
  });
});

// it("should update the totalCard array", () => {
//   expect(wrapper.state().totalCards).toEqual([]);
//   expect(mockFetchData).toBeCalled();
// });
// it("should display an answer card", () => {
//   const wrapper = shallow(<ReviewPage />);
//   expect(wrapper.instance().renderCard("answer")).toEqual(mockCard.answer);
// });
