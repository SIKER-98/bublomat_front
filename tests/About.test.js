import React from 'react';
import { shallow } from 'enzyme';
import About from "../src/components/about/About";

it('renders without crashing', () => {
    shallow(<About />);
});
