import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router";


class NewPost extends Component {
  render() {
    return (
      <div>
        <h2>test</h2>
      </div>
    );
  }
}

const putStateOnProps = (reduxState) => ({ reduxState });
export default withRouter(connect(putStateOnProps)(NewPost));
