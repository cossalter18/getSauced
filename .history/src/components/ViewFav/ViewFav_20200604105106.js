import React, { Component } from 'react';
import { connect } from "react-redux";
import { withRouter } from "react-router";


class ViewFav extends Component {

    render(){
        return(
            <h2>test</h2>
        )
    }
   







}









const putStateOnProps = (reduxState) => ({reduxState});
export default withRouter(connect(putStateOnProps)(ViewFav));