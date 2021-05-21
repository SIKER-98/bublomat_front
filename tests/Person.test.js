import React from 'react';
import { shallow } from 'enzyme';
import Person from "../src/components/about/Person";

it('renders without crashing', () => {
    shallow(<Person />);
});
