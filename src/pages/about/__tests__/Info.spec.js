import React from 'react';
import Info from '../components/info/Info.jsx'
import shallow from 'enzyme/build/shallow';

const setUp = (props) => shallow(<Info {...props} />)

describe("About component tests", () => {
    let component;

    beforeEach(() => {
        component = setUp();
    })

    it("Snapshot", () => {
        expect(component).toMatchSnapshot();
    })
})