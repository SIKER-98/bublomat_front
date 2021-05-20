import React from 'react';
import { shallow } from 'enzyme';
import NewProductComponent from "./NewProductComponent";

it('renders without crashing', () => {
    shallow(<NewProductComponent />);
});
