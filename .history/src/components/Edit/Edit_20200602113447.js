import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router'
import './Edit.css'
import { TextField } from "@material-ui/core";


class Edit extends Component {

    state = {
        post: {
            id: '',
            title: '',
            body: ''
        }

    }

    handleChange = (event, property) => {
        console.log(event.target.value)
        this.setState({
            post: {
                ...this.state.post,
                [property]: event.target.value
            }
        })
    }

    handleUpdate = (id) => {
        console.log("!!!!!!!!!!!!!!!!!!!!!!!!", this.state.post.id)
        this.props.dispatch({ type: 'UPDATE_POST', payload: this.state.post })
        this.setState({
            state: this.state
        })
        // console.log(this.state.post);
        console.log(this.props)
        
        this.props.history.push('/info')
    }


    render() {
        return (
            <>
                <div className="edit">
                    <h2>Edit</h2>
                    <div className="nav-right">
                        <button type="button" onClick={() => this.handleUpdate(thread.id)} className="btn btn-link btn-sm">
                            Update!
            </button>
                    </div>
                    {JSON.stringify(this.props.reduxState.threadReducer)}
                    {this.props.reduxState.getDetailsReducer.map((thread) => {
                        return (
                            <div key={thread.id}>
                            </div>
                        )
                    }
                    )
                    }
                </div>
                <div className='title'>
                    <TextField className="title"
                        type="text"
                        color="primary"
                        name="title"
                        placeholder="Title"
                        onChange={(event) => this.handleChange(event, "title")}
                    ></TextField>
                </div>
                <br />
                <div>
                    <textarea
                        className="body"
                        placeholder="Ravioli Ravioli, Give me the formuoli..."
                        rows={5}
                        rowsmax={5}
                        cols={100}
                        onChange={(event) => this.handleChange(event, "body")}
                    />
                </div>
            </>
        )
    }
}


const putStateOnProps = (reduxState) => ({ reduxState })
export default withRouter(connect(putStateOnProps)(Edit))