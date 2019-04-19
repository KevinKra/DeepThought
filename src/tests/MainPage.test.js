import React from "react";
import { shallow } from "enzyme";
import toJson from "enzyme-to-json";
import MainPage from "../components/MainPage";

const defaultState = {
  displayReviewPage: false,
  displayNotFoundPage: false,
  displayMainPage: true
};

const displayNotFound = {
  displayReviewPage: false,
  displayNotFoundPage: true,
  displayMainPage: false
};

const displayReviewPage = {
  displayReviewPage: true,
  displayNotFoundPage: false,
  displayMainPage: false
};

const displayMainPage = {
  displayReviewPage: false,
  displayNotFoundPage: false,
  displayMainPage: true
};

describe("<MainPage />", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<MainPage />);
  });
  it("should match the snapshot", () => {
    expect(toJson(wrapper)).toMatchSnapshot();
  });
  it("should match default state", () => {
    expect(wrapper.state()).toEqual(defaultState);
  });
  it("renderNotFoundPage should update local state", () => {
    expect(wrapper.state()).toEqual(defaultState);
    wrapper.instance().renderNotFoundPage();
    expect(wrapper.state()).toEqual(displayNotFound);
  });
  it("renderReviewPage should update local state", () => {
    expect(wrapper.state()).toEqual(defaultState);
    wrapper.instance().renderReviewPage();
    expect(wrapper.state()).toEqual(displayReviewPage);
  });
  it("renderMainPage should update local state", () => {
    expect(wrapper.state()).toEqual(defaultState);
    wrapper.instance().renderMainPage();
    expect(wrapper.state()).toEqual(displayMainPage);
  });
  // it("if local state displayReviewPage is true, render <ReviewPage />", () => {
  //   wrapper.instance().renderReviewPage();
  //   expect(wrapper.state()).toEqual(displayReviewPage);
  //   how to test a function expression inside of render() method
  //   expect(wrapper.instance().renderPath());
  // });
  // it("if local state displayNotFoundPage is true, render <NotFound />", () => {});
  // it("if local state displayMainPage is true, render mainPage", () => {});
});
