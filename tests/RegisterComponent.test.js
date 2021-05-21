import React from 'react';
import { shallow } from 'enzyme';
import RegisterComponent from "../src/components/RegisterComponent";

it('renders without crashing', () => {
    shallow(<RegisterComponent />);
});
