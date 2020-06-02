import React, { Component } from 'react';
import { connect } from "react-redux";
import { withRouter } from "react-router";
import { Paper } from '@material-ui/core'
import "./BlogInfo.css";

class BlogInfo extends Component {

    componentDidMount() {
        console.log('BLOGINFO COMPONENT DID MOUNT');
        this.getPost()

    }

    handleClick = () => {
        console.log('handleclick to go to back to blogs!!!!!', this.props.match.params.id);
        this.props.history.push('/info')
    }

    getPost = () => {
        console.log("IN GETPOST BLOGINFO.js", this.props.match.params.id);
        this.props.dispatch({ type: "GET_DETAILS", payload: this.props.match.params.id })
    }

    handleEdit = (id) => {
        console.log('Click Edit Button', id);
        this.props.history.push(`/edit`)
        
    }


    render() {
      
        
        return (
            <div className="info">
                <h2>Sauce-y</h2>
                <button onClick={() =>this.handleClick}>Back to posts</button>
                <button onClick={this.handleEdit}>Edit</button>
                <div className="paper">
                    {this.props.reduxState.getDetailsReducer.map((thread) => {
                        return (

                            <Paper className="paper" elevation={3} variant='outlined'>
                                <div key={thread.id}>
                                    <div className="title">
                                        <h1>{thread.title}</h1>
                                    </div>
                                    <div className="test">
                                        <p>{thread.body}</p>
                                    </div>
                                </div>
                            </Paper>

                        )

                    })}
                </div>
            </div>
        )
    }
}

const putStateOnProps = (reduxState) => ({ reduxState });
export default withRouter(connect(putStateOnProps)(BlogInfo));