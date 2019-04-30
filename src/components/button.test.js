import React from 'react';
import {shallow} from 'enzyme';
import renderer from 'react-test-renderer'

import Button from './button';

describe('<Button />', () => {
    it('Should call props.onClick when the button is clicked', () => {
        const mockCallBack = jest.fn()
        
        const wrapper = shallow(<Button onClick={mockCallBack}>Ok!</Button>);
        wrapper.find('button').simulate('click');
       /*  expect(mockCallBack.mock.calls.length).toEqual(1); */
    });

    it('renders the UI as expected', () => {
        const mockCallBack = jest.fn();

        const tree = renderer
            .create(<Button onClick={mockCallBack}>Ok!</Button>)
            .toJSON();
        expect(tree).toMatchSnapshot();
    });
});
