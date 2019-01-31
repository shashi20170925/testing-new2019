import React, {Component} from 'react';

export default class CommentBox extends Component{
    state={
        comment: ''
    };

    handleChange = (event) => {
        this.setState({
            comment: event.target.value
        });
    }
    onCommentSubmit = (event) => {
        event.preventDefault();
        this.setState({
            comment: ''
        });
    }
    render(){
        return (
            <form onSubmit={this.onCommentSubmit}>
                <h4>Add A comment</h4>
                <textarea onChange={this.handleChange} value={this.state.comment}/>

                <div>
                    <button>Submit Comment</button>
                </div>

            </form>
        );
    }
}