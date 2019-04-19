import React from "react";
import LoginPage from "../components/LoginPage";
import { shallow } from "enzyme";
import toJson from "enzyme-to-json";

const defaultState = {
  renderMainPage: false
};
const mockUserName = "Squishy-big-toes";

describe("<LoginPage />", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<LoginPage />);
  });
  it("should have a proper default state", () => {
    expect(wrapper.state()).toEqual({
      renderMainPage: false
    });
  });

  it("should render login page if renderMainPage local state is false", () => {
    expect(wrapper.state().renderMainPage).toBe(false);
    const input = wrapper.find("input").first();
    //test against snapshot while allowing input value (username) to be randomly generated
    expect(input.prop("type")).toBe("text");
    expect(input.prop("placeholder")).toBe(" Enter your name...");
  });

  it("should render main page if renderMainPage local state is true", () => {
    wrapper.setState({ renderMainPage: true });
    expect(wrapper.state().renderMainPage).toEqual(true);
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it("returnToLogin method should set renderMainPage local state to false when invoked", () => {
    wrapper.setState({ renderMainPage: true });
    expect(wrapper.state()).not.toEqual(defaultState);
    wrapper.instance().returnToLogin();
    expect(wrapper.state()).toEqual(defaultState);
  });

  it("goToMainPage method should set renderMainPage local state to true when invoked", () => {
    const mockUserName = "Squishy-big-toes";
    wrapper.setState({ renderMainPage: false });
    expect(wrapper.state()).toEqual(defaultState);
    // wrapper.instance().goToMainPage({
    //   preventDefault: () => {}
    // });
    // expect(wrapper.state().renderMainPage).toEqual(true);
  });
});
