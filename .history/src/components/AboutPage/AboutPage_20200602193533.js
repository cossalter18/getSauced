import React, { Component } from 'react';
import { connect } from "react-redux";
import { withRouter } from "react-router";



class AboutPage extends Component {

  componentDidMount() {
    this.props.dispatch({type: 'GET_RANDOM'})
  }



  render() {
    return (
      <div>
        <p>{JSON.stringify</p>
        <h2>FILL INFO</h2>
      </div>
    )
  }
}

const putStateOnProps = (reduxState) => ({ reduxState });
export default withRouter(connect(putStateOnProps)(AboutPage));