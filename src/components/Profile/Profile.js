import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router";

class Profile extends Component {
  render() {
    return (
      <div>
        <h2>PROFILE.JS</h2>
      </div>
    );
  }
}

const putStateOnProps = (reduxState) => ({ reduxState });
export default withRouter(connect(putStateOnProps)(Profile));
