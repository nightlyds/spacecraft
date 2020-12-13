import React from 'react';
import About from '../About.jsx'
import shallow from 'enzyme/build/shallow';

const setUp = (props) => shallow(<About {...props} />)

describe("About component tests", () => {
    let component;

    beforeEach(() => {
        component = setUp();
    })

    it("Snapshot", () => {
        expect(component).toMatchSnapshot();
    })
})