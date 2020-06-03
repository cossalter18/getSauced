import React, { Component } from 'react';
import { connect } from "react-redux";
import { withRouter } from "react-router";



class AboutPage extends Component {

  componentDidMount() {
    this.props.dispatch({ type: 'GET_RANDOM' })
  }



  render() {
    return (
      <div>
        <p>{JSON.stringify(this.props.reduxState.randomReducer)}</p>
        <h2>FILL INFO</h2>
        {this.props.reduxState.randomReducer.map((item) => {
          return (
            <div key={item.id}>
              <div>
                {item.instructions}
              </div>
            </div>
          )
        })}


      </div>
    )
  }
}

const putStateOnProps = (reduxState) => ({ reduxState });
export default withRouter(connect(putStateOnProps)(AboutPage));