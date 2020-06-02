import React, { Component } from 'react';
import { connect } from "react-redux";
import { withRouter } from "react-router";
import { Paper } from '@material-ui/core'
import "./BlogInfo.css";
import ButtonToolbar from 'react-bootstrap/ButtonToolbar'
import ButtonGroup from 'react-bootstrap/ButtonGroup'
import Button from 'react-bootstrap/Button'
import { actionChannel } from 'redux-saga/effects';



class BlogInfo extends Component {


    state = {
        favorite: {
            id: this.props.match.params.id,
            user_id: this.props.reduxState.user.id
        }
    }

    componentDidMount() {
        console.log('BLOGINFO COMPONENT DID MOUNT', this.props.reduxState.user.id, this.props.match.params.id);
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

    addToFavorites = () => {
        console.log('ADDED TO FAVORITES');
        this.props.dispatch({ type: "ADD_FAVORITES", payload: this.state.favorite})
        console.log("$$$$$$$$$$$$$$$$$$$$$$$$$$", this.state.favorite);
        
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
            <>
                <div>
                    <ButtonToolbar className="toolbar" aria-label="Toolbar with button groups">
                        <ButtonGroup size="sm" className="mr-2" aria-label="First group">
                            <Button variant="link" onClick={this.handleClick}>Back to posts</Button>
                        </ButtonGroup>
                        <ButtonGroup size="sm" className="mr-2" aria-label="Second group">
                            <Button variant="link" onClick={this.handleEdit}>Edit</Button>
                        </ButtonGroup>
                        <ButtonGroup size="sm" aria-label="Third group">
                            <Button variant="link" onClick={this.addToFavorites}>Favorite</Button>
                        </ButtonGroup>
                    </ButtonToolbar>
                </div>
                <div className="info">
                    <h2>Sauce-y</h2>
                    <div className="paper">
                        <div className="title">
                            {/* <p>{JSON.stringify(this.props.reduxState.getDetailsReducer)}</p> */}
                            <h1>{this.props.reduxState.getDetailsReducer.title}</h1>
                        </div>
                        <div className="test">
                            <p>{this.props.reduxState.getDetailsReducer.body}</p>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

const putStateOnProps = (reduxState) => ({ reduxState });
export default withRouter(connect(putStateOnProps)(BlogInfo));