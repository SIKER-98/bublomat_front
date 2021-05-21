import React from 'react';
import { shallow } from 'enzyme';
import FooterComponent from "./FooterComponent";

it('renders without crashing', () => {
    shallow(<FooterComponent />);
});
