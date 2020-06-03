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
        <p>{JSON.stringify(this.props.reduxState)}</p>
        <h2>FILL INFO</h2>
        <h1>{this.props.reduxState.randomReducer.summary}</h1>
      </div>
    )
  }
}

const putStateOnProps = (reduxState) => ({ reduxState });
export default withRouter(connect(putStateOnProps)(AboutPage));