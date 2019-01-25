import React from 'react';
import App from '../App';
import {shallow} from 'enzyme';
import CommentBox from '../CommentBox';

it("Shows the CommentBox",()=>{
const wrapped=shallow(<App />);

   
expect(wrapped.find(CommentBox).length).toEqual(1);


});