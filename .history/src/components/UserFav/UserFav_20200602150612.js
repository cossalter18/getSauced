import React, { Component } from "react";
import { connect } from "react-redux"
import { withRouter } from "react-router";
import GridList from '@material-ui/core/GridList'
import {Paper} from '@material-ui/core'
import GridListTile from '@material-ui/core/GridListTile'
import {Table} from "react-bootstrap"
import "./UserFav.css"

class UserFav extends Component {

 state ={
   favorite: {
     id:'',
     user_id:''
   }
 }

  //we will render all the favorites here for the user
  componentDidMount = () => {
    this.getFavorites();
  }


  getFavorites = (thread) => {
    this.props.dispatch({ type: "GET_FAVORITES"})
    console.log("===============>>>", this.props.reduxState.user.id)

  }

  render() {
    return (
      <>
      <div>
        <h2>UserFav</h2>
        <p>{JSON.stringify(this.props.reduxState)}</p>
      </div>
     <GridList className="list" cellHeight={"auto"} spaceing={10} cols={5}>
       {this.props.reduxState.favoritesReducer.map((thread) => (
         <GridListTile className="tile" key={thread.id} cols={thread.cols || 1}>
           <Paper elevation={3} variant="outlined" className="paper">
           <h2>{thread.title}</h2>
           <h6>{thread.body}</h6>
           </Paper>
         </GridListTile>
       ))}
     </GridList>
      </>
    );
  }
}

const putStateOnProps = (reduxState) => ({ reduxState });
export default withRouter(connect(putStateOnProps)(UserFav));
