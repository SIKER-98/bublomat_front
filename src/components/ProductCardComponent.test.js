import React from 'react';
import { shallow } from 'enzyme';
import ProductCardComponent from "./ProductCardComponent";

it('renders without crashing', () => {
    shallow(<ProductCardComponent />);
});
