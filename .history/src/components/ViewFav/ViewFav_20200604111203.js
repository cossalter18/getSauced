import React, { Component } from 'react';
import { connect } from "react-redux";
import { withRouter } from "react-router";


class ViewFav extends Component {

    componentDidMount=()=>{
        this.getFav()
    }

    getFav = () => {
        console.log("IN GETPOST BLOGINFO.js", this.props.match.params.id);
        this.props.dispatch({ type: "GET_DETAILS", payload: this.props.match.params.id })
    }

    render(){
        return(
            <>
            <h3>{JSON.stringify(this.props.reduxState.favoritesReducer)}</h3>
            <h2>{this.props.reduxState.favorites}</h2>
            </>
        )
    }
   







}









const putStateOnProps = (reduxState) => ({reduxState});
export default withRouter(connect(putStateOnProps)(ViewFav));