import React from 'react';
import { shallow } from 'enzyme';
import AdminProductComponent from "./AdminProductComponent";

it('renders without crashing', () => {
    shallow(<AdminProductComponent />);
});
