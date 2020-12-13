import React from "react";
import Launches from "../Launches.jsx";
import { shallow } from "enzyme";

const setUp = (props) => shallow(<Launches {...props} />);

describe("Launches component tests", () => {
  describe("Snapshot", () => {
    let component;

    beforeEach(() => {
      component = setUp();
    });

    it("Launches default snapshot", () => {
      expect(component).toMatchSnapshot();
    });

    it("Launches data snapshot", () => {
      component = setUp({ launches: { 0: "0", 1: "1" }, loading: true });
      expect(component).toMatchSnapshot();
    });

    it("Launches error snapshot", () => {
      component = setUp({ loading: true, error: true });
      expect(component).toMatchSnapshot();
    });
  });

  describe("Props", () => {
    let component;

    it("loadUpLaunches props test", () => {
      component = Launches.defaultProps.loadUpLaunches();
      expect(component).toBe(undefined);
    });

    it("loadUpOneLaunch props test", () => {
      component = Launches.defaultProps.loadUpOneLaunch();
      expect(component).toBe(undefined);
    });

    it("oneLaunch props test", () => {
      component = Launches.defaultProps.oneLaunch;
      expect(component).toMatchObject({});
    });

    it("launches props test", () => {
      component = Launches.defaultProps.launches;
      expect(component).toMatchObject({});
    });

    it("loading props test", () => {
      component = Launches.defaultProps.loading;
      expect(component).toBe(false);
    });

    it("error props test", () => {
      component = Launches.defaultProps.error;
      expect(component).toBe(false);
    });
  });
});
