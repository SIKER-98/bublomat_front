import React from 'react';
import { shallow } from 'enzyme';
import CommentComponent from "./CommentComponent";

it('renders without crashing', () => {
    shallow(<CommentComponent />);
});
