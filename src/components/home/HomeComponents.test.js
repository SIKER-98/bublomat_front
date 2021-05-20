import React from 'react';
import { shallow } from 'enzyme';
import HomeComponent from "./HomeComponent";

it('renders without crashing', () => {
    shallow(<HomeComponent />);
});
