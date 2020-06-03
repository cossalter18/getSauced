import React, { Component } from 'react';
import { connect } from "react-redux";
import { withRouter } from "react-router";



class AboutPage extends Component {

  componentDidMount() {
    this.props.dispatch({})
  }



  render() {
    return (
      <div>
        <h2>FILL INFO</h2>
      </div>
    )
  }
}

const putStateOnProps = (reduxState) => ({ reduxState });
export default withRouter(connect(putStateOnProps)(AboutPage));