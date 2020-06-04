import React, { Component } from 'react';
import { connect } from "react-redux";
import { withRouter } from "react-router";
import './AboutPage.css'
import dompurify from 'dompurify';


class AboutPage extends Component {

  componentDidMount() {
    this.props.dispatch({ type: 'GET_RANDOM' })
  }

  render() {
    let sanitizer=dompurify.sanitize;
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
              <div>
                <img src={item.image} alt={item.title} className="img"></img>
                </div>
             <div className="ing">
               {/* {item.extendedIngredients} */}
               </div>
              <div className="summary">
                {item.instructions}
              </div>
              <div className="source">
                <p> Get it straight from the source: {item.sourceUrl}</p>
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