import React from 'react';
import Comprasion from '../components/comprasion/Comprasion.jsx';
import { shallow } from 'enzyme';

const setUp = (props) => shallow(<Comprasion {...props} />)

describe("Comprasion component test", () => {
    let component;

    beforeEach(() => {
        component = setUp();
    })

    it("Snapshot test", () => {
        expect(component).toMatchSnapshot();
    })
})