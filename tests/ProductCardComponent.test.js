import React from 'react';
import { shallow } from 'enzyme';
import ProductCardComponent from "../src/components/ProductCardComponent";

it('renders without crashing', () => {
    shallow(<ProductCardComponent />);
});
