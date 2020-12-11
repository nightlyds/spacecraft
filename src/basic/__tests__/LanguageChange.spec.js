import React from 'react';
import LanguageChange from '../components/LanguageChange.jsx';
import { shallow } from 'enzyme';

const setUp = (props) => shallow(<LanguageChange {...props} />);

describe("Language Change component tests", () => {
    let component;

    beforeEach(() => {
        component = setUp();
    })
    
    it("Snapshot test", () => {
        expect(component).toMatchSnapshot();
    })
})