import React from 'react';
import { shallow } from 'enzyme';
import ScannerComponent from "./ScannerComponent";

it('renders without crashing', () => {
    shallow(<ScannerComponent />);
});
