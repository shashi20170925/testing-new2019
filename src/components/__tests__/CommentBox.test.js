import React from 'react';
import CommentBox from 'components/CommentBox';
import { mount } from 'enzyme';

let wrapped;

beforeEach(() => {
    wrapped = mount(<CommentBox/>);
});

afterEach(() => {
    wrapped.unmount();
});

it('has text area and a button', () => {
    //const wrapped=mount(<CommentBox />);
   //console.log(wrapped.find('textarea'));
    //console.log(wrapped.find('button'));
   //let wrapped = mount(<CommentBox/>)
   //expect(actual predicate).wxpwcted predicate/value
    expect(wrapped.find('textarea').length).toEqual(1);
    expect(wrapped.find('button').length).toEqual(1);
expect(3>1).toEqual(true);
});

it("has text area where user can input", () => {
    //let wrapped = mount(<CommentBox/>);
    wrapped.find('textarea').simulate('change', {
        target: {
            value: 'new comment'
        }
    });
    wrapped.update();

    expect(wrapped.find('textarea').prop('value')).toEqual('new comment');
});

it("has a textarea for input",()=>{
    wrapped.find('textarea').simulate('change', {
        target: {
            value: 'new comment'
        }
    });
    wrapped.update();
    expect(wrapped.find('textarea').prop('value')).toEqual('new comment');
});