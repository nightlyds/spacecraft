import { shallow } from "enzyme";
import React from "react";
import Spacecraft from "../Spacecraft.jsx";

const setUp = (props) => shallow(<Spacecraft {...props} />);

describe("Spacecraft tests", () => {
  describe("One wrapper element test", () => {
    let component;

    beforeEach(() => {
      component = setUp();
    });

    it("Wrapper element test", () => {
      const wrapper = component.find(".spacecraft");
      expect(wrapper.length).toBe(1);
    });
  });

  describe("Snapshot tests", () => {
    let component;

    beforeEach(() => {
      component = setUp();
    });

    it("Default snapshot", () => {
      expect(component).toMatchSnapshot();
    });

    it("With loading true and data", () => {
      component = setUp({ loading: true, data: {0: "0", 1: "1" }, error: false });
      expect(component).toMatchSnapshot();
    });

    it("With loading true and error true", () => {
      component = setUp({ loading: true, error: true });
      expect(component).toMatchSnapshot();
    });
  });

  describe("Props test", () => {
    it("Data props test", () => {
      let result = Spacecraft.defaultProps.data;
      expect(result).toEqual({});
    });

    it("Loading props test", () => {
        let result = Spacecraft.defaultProps.loading;
        expect(result).toEqual(false);
      });

    it("Error props test", () => {
      let result = Spacecraft.defaultProps.error;
      expect(result).toEqual(false);
    });

    it("LoadUp props test", () => {
        let result = Spacecraft.defaultProps.loadUp();
        expect(result).toEqual(undefined);
      });
  });
});
