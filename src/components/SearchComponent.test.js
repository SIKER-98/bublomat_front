import React from 'react';
import { shallow } from 'enzyme';
import SearchComponent from "./SearchComponent";

it('renders without crashing', () => {
    shallow(<SearchComponent />);
});
