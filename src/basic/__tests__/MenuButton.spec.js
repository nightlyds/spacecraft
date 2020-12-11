import React from 'react';
import { shallow } from 'enzyme';
import MenuButton from '../components/menu/MenuButton.jsx';

const setUp = (props) => shallow(<MenuButton {...props} />)

describe("Menu button tests", () => {
    let component;

    beforeEach(() => {
        component = setUp();
    })

    describe('Check default props', () => {
        it('MenuOpen props test', () => {
            const result = MenuButton.defaultProps.menuOpen();
            expect(result).toBe(undefined)
        })
        it('Icon props test', () => {
            const result = MenuButton.defaultProps.icon;
            expect(result).toBe(false)
        })
    })

    describe('Click func test', () => {
        const mockCallback = jest.fn();
        component = shallow(<MenuButton menuOpen={mockCallback} />)
        expect(mockCallback.mock.calls.length).toEqual(0);
        component.find('.menu-button').simulate('click')
        expect(mockCallback.mock.calls.length).toEqual(1);
    })
})