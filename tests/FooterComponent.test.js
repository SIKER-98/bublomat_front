import React from 'react';
import { shallow } from 'enzyme';
import FooterComponent from "../src/components/FooterComponent";

it('renders without crashing', () => {
    shallow(<FooterComponent />);
});
