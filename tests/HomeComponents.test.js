import React from 'react';
import { shallow } from 'enzyme';
import HomeComponent from "../src/components/home/HomeComponent";

it('renders without crashing', () => {
    shallow(<HomeComponent />);
});
