import React from "react";
import OneLaunch from "../components/oneLaunch/OneLaunch.jsx";
import { shallow } from "enzyme";

const setUp = (props) => shallow(<OneLaunch {...props} />);

describe("OneLaunch component tests", () => {
  describe("Snapshot", () => {
    let component;

    beforeEach(() => {
      component = setUp();
    });

    it("OneLaunch default snapshot", () => {
      expect(component).toMatchSnapshot();
    });
  });

  describe("Props", () => {
    let component;

    it("oneLaunchClose props test", () => {
      component = OneLaunch.defaultProps.oneLaunchClose();
      expect(component).toBe(undefined);
    });
  });

  describe('Close icon click test', () => {
    let component;

    beforeEach(() => {
        component = setUp();
    })
    it('oneLaunchClose test', () => {
        let mockCallback = jest.fn();
        component = setUp({ oneLaunchClose: mockCallback })
        expect(mockCallback.mock.calls.length).toEqual(0)
        component.find('.launch-header-icon').simulate('click')
        expect(mockCallback.mock.calls.length).toEqual(1)
    })
  })
});
