import React from 'react';
import { shallow } from 'enzyme';
import SearchComponent from "./SearchComponent";

const match = {
    params: {
        productName: "Nazwa"
    }
};

it('renders without crashing', () => {
    shallow(<SearchComponent match/>);
});
