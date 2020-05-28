import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router";

class Profile extends Component {

  handleClick=()=>{
    console.log('handleClick');
    
  }
  render() {
    return (
      <>
      <div className="welcome">
        <h2>Update Your Info</h2>
      </div>
      <div className="profileInputs">
        <input type="text" placeholder="First Name" name="fname"></input>
        <input type="text" placeholder="Last Name" name="lname"></input>
        <input type="text" placeholder="Email" name="email"></input>
        <input type="text" placeholder="Zip" name="zip"></input>
      </div>
      <div>
        <button className="profileButton" onClick={this.handleClick}>Re-Sauce!</button>
      </div>
      </>
    );
  }
}

const putStateOnProps = (reduxState) => ({ reduxState });
export default withRouter(connect(putStateOnProps)(Profile));
