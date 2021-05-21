import React from 'react';
import { shallow } from 'enzyme';
import NavigationComponent from "./NavigationComponent";

it('renders without crashing', () => {
    shallow(<NavigationComponent />);
});
