import React from 'react';
import { shallow } from 'enzyme';
import AdminCommentComponent from "../src/components/admin/AdminCommentComponent";

it('renders without crashing', () => {
    shallow(<AdminCommentComponent />);
});
