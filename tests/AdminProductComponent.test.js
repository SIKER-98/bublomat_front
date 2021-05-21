import React from 'react';
import { shallow } from 'enzyme';
import AdminProductComponent from "../src/components/admin/AdminProductComponent";

it('renders without crashing', () => {
    shallow(<AdminProductComponent />);
});
