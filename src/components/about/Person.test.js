import React from 'react';
import { shallow } from 'enzyme';
import Person from "./Person";

it('renders without crashing', () => {
    shallow(<Person />);
});
