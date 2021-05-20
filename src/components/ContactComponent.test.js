import React from 'react';
import { shallow } from 'enzyme';
import ContactComponent from "./ContactComponent";

it('renders without crashing', () => {
    shallow(<ContactComponent />);
});
