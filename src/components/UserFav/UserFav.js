import React, { Component } from "react";
import { connect } from "react-redux"
import { withRouter } from "react-router";

class UserFav extends Component {

  //we will render all the favorites here for the user
  componentDidMount = () => {
    this.getFavorites();
  }


  getFavorites = () => {
    this.props.dispatch({ type: "GET_FAVORITES" })

  }

  render() {
    return (
      <div>
        <h2>UserFav</h2>
      </div>
    );
  }
}

const putStateOnProps = (reduxState) => ({ reduxState });
export default withRouter(connect(putStateOnProps)(UserFav));
