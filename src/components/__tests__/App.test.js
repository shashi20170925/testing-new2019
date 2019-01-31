import React from 'react';
import App from 'Components/App';
import {
    shallow
} from 'enzyme';
import CommentBox from 'Components/CommentBox';
import CommentList from 'Components/CommentList';

let wrapped;
beforeEach(() => {
    wrapped = shallow(<App />);
});


// it("Shows the CommentBox", () => {
//     expect(wrapped.find(CommentBox).length).toEqual(1);
// });

// it("Shows the ComponentList", () => {
//     expect(wrapped.find(CommentList).length).toEqual(1);
// });