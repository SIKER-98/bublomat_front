import React from 'react';
import { shallow } from 'enzyme';
import NewProductComponent from "../src/components/NewProductComponent";

it('renders without crashing', () => {
    shallow(<NewProductComponent />);
});
