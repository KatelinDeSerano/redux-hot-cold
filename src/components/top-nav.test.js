import React from 'react';
import { shallow, mount } from 'enzyme';

describe('<TopNav />', () => {
    it('Renders without crashing', () => {
        shallow(<TopNav />)
    });
});