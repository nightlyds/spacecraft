import React from 'react';
import Error404 from '../components/Error404.jsx';
import { shallow } from 'enzyme';

const setUp = (props) => shallow(<Error404 {...props} />);

describe("Language Change component tests", () => {
    let component;

    beforeEach(() => {
        component = setUp();
    })
    
    it("Snapshot test", () => {
        expect(component).toMatchSnapshot();
    })
})