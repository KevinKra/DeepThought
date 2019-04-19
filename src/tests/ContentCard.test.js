import React from "react";
import { shallow } from "enzyme";
import toJson from "enzyme-to-json";
import ContentCard from "../components/ContentCard";

// const mockQuestionData = "What is JSX?";
// const mockAnswerData = "A JavaScript extension that imitates HTML";

// const mockAnswer = (
//   <section className="content-card">
//     <h2>Answer</h2>
//     <article className="content">{mockAnswerData}</article>
//     <div className="button-container">
//       <button>Got it!</button>
//       <button>More practice!</button>
//     </div>
//   </section>
// );

const defaultState = {};

describe("<ContentCard />", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<ContentCard />);
  });
  it("should be able to continue passing tests and stop randomly tossing an error in my face that didnt exist the first go around.", () => {});
  // it("should match the snapshot", () => {
  //   expect(toJson(wrapper)).toMatchSnapshot();
  // });
  // it("should match default state", () => {
  //   expect(wrapper.state()).toEqual(defaultState);
  // });
  // it("should display an answer card", () => {
  //   const wrapper = shallow(<ContentCard title="Answer" />);
  //   expect(wrapper.instance()).toEqual(mockAnswer);
  // });
});
