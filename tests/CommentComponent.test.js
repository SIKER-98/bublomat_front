import React from 'react';
import { shallow } from 'enzyme';
import CommentComponent from "../src/components/CommentComponent";

it('renders without crashing', () => {
    shallow(<CommentComponent />);
});
