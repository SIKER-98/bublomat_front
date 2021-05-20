import React from 'react';
import { shallow } from 'enzyme';
import LoginComponent from "./LoginComponent";

it('renders without crashing', () => {
    shallow(<LoginComponent />);
});
