import React from 'react';
import { shallow } from 'enzyme';
import ContactComponent from "../src/components/ContactComponent";

it('renders without crashing', () => {
    shallow(<ContactComponent />);
});
