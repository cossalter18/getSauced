import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router";
import { TextField } from "@material-ui/core";
import { Button } from "@material-ui/core";
import { createMuiTheme } from "@material-ui/core/styles";
import { ThemeProvider as MuiThemeProvider } from "@material-ui/core/styles";

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
  };

  render() {
    return (
      <div>
        <h2>New Post</h2>
        <p>{JSON.stringify(this.props.reduxState.user)}</p>
        <div className="inputs">
          <MuiThemeProvider theme={myTheme}>
            <TextField className="title"
              type="text"
              color="primary"
              name="title"
              placeholder="Title"
              onChange={(event) => this.handleChange(event, "title")}
            ></TextField>
            <br/>
            <TextField className="body"
            aria-label="minimum height" 
            rows={25} 
            placeholder ="Start typing..."
            onChange={(event) => this.handleChange(event, "body")}/>
            
            <Button
              className="button"
              color="primary"
              variant="contained"
              onClick={this.postBlog}
            >
              Post!
            </Button>
          </MuiThemeProvider>
        </div>
      </div>
    );
  }
}

const putStateOnProps = (reduxState) => ({ reduxState });
export default withRouter(connect(putStateOnProps)(NewPost));
