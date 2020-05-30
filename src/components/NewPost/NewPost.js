import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router";
import { TextField } from "@material-ui/core";
import Button from 'react-bootstrap/Button'
import { createMuiTheme } from "@material-ui/core/styles";
import { ThemeProvider as MuiThemeProvider } from "@material-ui/core/styles";
import { TextareaAutosize } from '@material-ui/core'


import './NewPost.css'

const myTheme = createMuiTheme({
  palette: {
    primary: {
      main: "#3f51b5",
    },
  },
}); // end theme

class NewPost extends Component {

  state = {
    newPost: {
      id: '',
      title: '',
      body: '',
      user_id: this.props.reduxState.user.id,
      username: this.props.reduxState.user.username
    }
  }

  handleChange = (event, property) => {
    console.log(event.target.value);
    this.setState({
      newPost: {
        ...this.state.newPost,
        [property]: event.target.value
      }
    });
  };

  postBlog = () => {
    console.log("clicked");
    this.props.dispatch({
      type: 'NEW_POST',
      payload: this.state.newPost
    })
    this.props.history.push('/info')

  };

  render() {
    return (
      <div>
        <h2>New Post</h2>
        <p>{JSON.stringify(this.props.reduxState.user)}</p>
        <div className="inputs">
          <MuiThemeProvider theme={myTheme}>
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
                rowsMax={5}
                cols={100}
              />
            </div>
            <Button className="postButton" onClick={this.postBlog}>Share the secrets</Button>
          </MuiThemeProvider>
        </div>

      </div>
    );
  }
}

const putStateOnProps = (reduxState) => ({ reduxState });
export default withRouter(connect(putStateOnProps)(NewPost));
