import React, { Component } from 'react';
import { connect } from "react-redux";
import { withRouter } from "react-router";

class BlogInfo extends Component {

componentDidMount(){
    console.log('BLOGINFO COMPONENT DID MOUNT');
    this.getPost()
    
}

handleClick=()=>{
    console.log('handleclick to go to back to blogs!!!!!', this.props.match.params.id);
    this.props.history.push('/info')
}

getPost = () => {
    console.log("IN GETPOST BLOGINFO.js", this.props.match.params.id);
    this.props.dispatch({type: "GET_DETAILS", payload: this.props.match.params.id})
}



    render() {
        return (
            <div className="info">
                <h2>Sauce-y</h2>
                <button onClick={this.handleClick}>Back to posts</button>
                <button onClick={this.handleEdit}>Edit</button>
                
                {this.props.reduxState.getDetailsReducer.map((thread) => {
                    return (
                        <div key={thread.id}>
                            <h2>{thread.title}</h2>
                            <p>{thread.body}</p>
                            </div>
                    )

                })}
            </div>
            )
    }
}

const putStateOnProps = (reduxState) => ({ reduxState });
export default withRouter(connect(putStateOnProps)(BlogInfo));