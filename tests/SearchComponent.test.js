import React from 'react';
import { shallow } from 'enzyme';
import SearchComponent from "../src/components/SearchComponent";

it('renders without crashing', () => {
    shallow(<SearchComponent />);
});
