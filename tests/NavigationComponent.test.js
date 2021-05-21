import React from 'react';
import { shallow } from 'enzyme';
import NavigationComponent from "../src/components/NavigationComponent";

it('renders without crashing', () => {
    shallow(<NavigationComponent />);
});
