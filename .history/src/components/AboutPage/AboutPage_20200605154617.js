import React, { Component } from 'react';
import { connect } from "react-redux";
import { withRouter } from "react-router";
import './AboutPage.css'
import dompurify from 'dompurify';

//This page has become our Random Sauce page available to all visitors of the website with no need to be logged in.

class AboutPage extends Component {

  //fires our random sauce API Call to spoonacular
  componentDidMount() {
    this.props.dispatch({ type: 'GET_RANDOM' })
  }

  render() {
    //used to sanitize the response from spoonacular to prevent xss attacks.
    let sanitizer=dompurify.sanitize;
    return (
      <div>
        <h2 className="rando">Random Sauce!</h2>
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
               using dompurify to sanitize our response from our api
              <div dangerouslySetInnerHTML={{__html: sanitizer(item.instructions)}} className="summary">
              </div>
              <div className="source">
                {/* <p> Get it straight from the source: {item.sourceUrl}</p> */}
                <a href={item.sourceUrl}> See the source</a>
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