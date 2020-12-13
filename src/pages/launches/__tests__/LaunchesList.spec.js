import React from "react";
import LaunchesList from "../components/launchesList/LaunchesList.jsx";
import { shallow } from "enzyme";

const setUp = (props) => shallow(<LaunchesList {...props} />);

describe("LaunchesList component tests", () => {
  describe("Snapshot", () => {
    let component;

    beforeEach(() => {
      component = setUp();
    });

    it("LaunchesList default snapshot", () => {
      expect(component).toMatchSnapshot();
    });
  });
});
