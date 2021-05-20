import React from 'react';
import { shallow } from 'enzyme';
import AdminCommentComponent from "./AdminCommentComponent";

it('renders without crashing', () => {
    shallow(<AdminCommentComponent />);
});
