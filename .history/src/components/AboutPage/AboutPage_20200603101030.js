import React, { Component } from 'react';
import { connect } from "react-redux";
import { withRouter } from "react-router";
import './AboutPage.css'



class AboutPage extends Component {

  componentDidMount() {
    this.props.dispatch({ type: 'GET_RANDOM' })
  }



  render() {
    return (
      <div>
        {/* <p>{JSON.stringify(this.props.reduxState.randomReducer)}</p> */}
        <h2>Random Sauce!</h2>
        <div className="randomContainer">
        {this.props.reduxState.randomReducer.map((item) => {
          return (
            <div key={item.id}>
              <div className='title'>
                <b>{item.title}</b>
              </div>
              <div className='img'>
                <img src={item.image} alt={item.title}
                </div>
              <div className="summary">
                {item.summary}
                </div>
              <div className="summary">
                {item.instructions}
              </div>
            </div>
          )
        })}
        </div>


      </div>
    )
  }
}

const putStateOnProps = (reduxState) => ({ reduxState });
export default withRouter(connect(putStateOnProps)(AboutPage));