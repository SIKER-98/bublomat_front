import React from 'react';
import { shallow } from 'enzyme';
import LoginComponent from "../src/components/LoginComponent";

it('renders without crashing', () => {
    shallow(<LoginComponent />);
});
