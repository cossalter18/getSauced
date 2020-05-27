import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router";
import { TextField } from "@material-ui/core";
import { Button } from "@material-ui/core";
import { createMuiTheme } from "@material-ui/core/styles";
import { ThemeProvider as MuiThemeProvider } from "@material-ui/core/styles";

const myTheme = createMuiTheme({
  palette: {
    primary: {
        main: "#3f51b5"
    }
  }
}); // end theme

class NewPost extends Component {
  render() {
    return (
      <div>
        <h2>New Post</h2>
        <div id="inputs">
          <MuiThemeProvider theme={myTheme}>
            
              <TextField
                type="text"
                color="primary"
                name="title"
                placeholder="Title"
              ></TextField>
              <TextField
                type="text"
                color="primary"
                name="body"
                placeholder="Post"
              ></TextField>
            
          </MuiThemeProvider>
        </div>
      </div>
    );
  }
}

const putStateOnProps = (reduxState) => ({ reduxState });
export default withRouter(connect(putStateOnProps)(NewPost));
