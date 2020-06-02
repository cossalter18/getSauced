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

    handleEdit = () => {
        console.log('Click Edit Button');
        this.props.history.push(`/edit/${id}`)
        
    }


    render() {
      
        
        return (
            <div className="info">
                <h2>Sauce-y</h2>
                <button onClick={this.handleClick}>Back to posts</button>
                <button onClick={this.handleEdit}>Edit</button>
                <div className="paper">
                    

                            <Paper className="paper" elevation={3} variant='outlined'>
                             
                                    <div className="title">
                                        <h1>{this.props.reduxState.getDetailsReducer.title}</h1>
                                    </div>
                                    <div className="test">
                                        <p>{this.props.reduxState.getDetailsReducer..body}</p>
                                    </div>
                              
                            </Paper>

                        

                
                </div>
            </div>
        )
    }
}

const putStateOnProps = (reduxState) => ({ reduxState });
export default withRouter(connect(putStateOnProps)(BlogInfo));