import React, {Component} from 'react';
import {connect} from 'react-redux';
import * as actions from 'actions';
import requireAuth from 'components/reqAuth';


 class CommentBox extends Component{


    state={
        comment: ''
    };

    handleChange = (event) => {
        this.setState({
            comment: event.target.value
        });
    }
    onCommentSubmit = (event) => {
        console.log('in the submit ',this.props );
        event.preventDefault();
        this.props.saveComment(this.state.comment);
        this.setState({
            comment: ''
        });
    }
    render(){
        return (
            <div>
            <form onSubmit={this.onCommentSubmit}>
                <h4>Add A comment</h4>
                <textarea onChange={this.handleChange} value={this.state.comment}/>

                <div>
                    <button>Submit Comment</button>
                </div>

            </form>
            <button className="fetch-comments" onClick={this.props.fetchComments}>Get Comments</button>
            </div>
        );
    }
}



export default connect(null, actions)(requireAuth(CommentBox));
