import React from 'react';
import { shallow } from 'enzyme';
import RegisterComponent from "./RegisterComponent";

it('renders without crashing', () => {
    shallow(<RegisterComponent />);
});
