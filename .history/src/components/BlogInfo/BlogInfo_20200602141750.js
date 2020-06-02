import React, { Component } from 'react';
import { connect } from "react-redux";
import { withRouter } from "react-router";
import { Paper } from '@material-ui/core'
import "./BlogInfo.css";
import ButtonToolbar from 'react-bootstrap/ButtonToolbar'
import ButtonGroup from 'react-bootstrap/ButtonGroup'
import Button from 'react-bootstrap/Button'



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
        if (this.props.reduxState.user.id === this.props.reduxState.getDetailsReducer.user_id) {
            this.props.history.push(`/edit/${this.props.reduxState.getDetailsReducer.id}`)
        } else {
            alert('Not your sauce? Not your edit. Later mate')
        }
       
        
    }


    render() {
      
        
        return (
            <div className="info">
                <h2>Sauce-y</h2>
                <ButtonToolbar className="toolbar" aria-label="Toolbar with button groups">
                    <ButtonGroup size="sm" className="mr-2" aria-label="First group">
                        <Button onClick={this.handleClick}>Back to posts</Button>
                    </ButtonGroup>
                    <ButtonGroup className="mr-2" aria-label="Second group">
                        <Button onClick={this.handleEdit}>Edit</Button>
                    </ButtonGroup>
                    <ButtonGroup aria-label="Third group">
                        <Button onClick={this.addToFavorites}>Favorite</Button>

                    </ButtonGroup>
                </ButtonToolbar>
                <div className="paper">
                    

                            <Paper className="paper" elevation={3} variant='outlined'>
                             
                                    <div className="title">
                                        <p>{JSON.stringify(this.props.reduxState.getDetailsReducer)}</p>
                                        <h1>{this.props.reduxState.getDetailsReducer.title}</h1>
                                    </div>
                                    <div className="test">
                                        <p>{this.props.reduxState.getDetailsReducer.body}</p>
                                    </div>
                              
                            </Paper>

                        

                
                </div>
            </div>
        )
    }
}

const putStateOnProps = (reduxState) => ({ reduxState });
export default withRouter(connect(putStateOnProps)(BlogInfo));