import React from "react";
import Rocket from "../components/comprasion/components/Rocket.jsx";
import { shallow } from "enzyme";

const setUp = (props) => shallow(<Rocket {...props} />);

describe("Rocket component test", () => {
  let component;

  beforeEach(() => {
    component = setUp();
  });

  it("Snapshot test", () => {
    expect(component).toMatchSnapshot();
  });
});
