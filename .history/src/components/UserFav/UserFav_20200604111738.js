import React, { Component } from "react";
import { connect } from "react-redux"
import { withRouter } from "react-router";
import GridList from '@material-ui/core/GridList'
import {Paper} from '@material-ui/core'
import GridListTile from '@material-ui/core/GridListTile'
import "./UserFav.css"
import {List} from '@material-ui/core'

class UserFav extends Component {


  //we will render all the favorites here for the user
  componentDidMount = () => {
    this.getFavorites();
  }


  getFavorites = (thread) => {
    this.props.dispatch({ type: "GET_FAVORITES"})
    console.log("===============>>>", this.props.reduxState.user.id)
  }

  // viewFav = (id) => {
  //   console.log('Favorite Clicked');
  //   this.props.history.push(`/show/${id}`)
  // }

  render() {
    return (
      <>
      <div>
        <h2>Secret Sauces</h2>
        {/* <p>{JSON.stringify(this.props.reduxState.favoritesReducer)}</p> */}
      </div>
     <GridList className="list" rows={4} spaceing={5} cols={1}>
       {this.props.reduxState.favoritesReducer.map((thread) => (
         <GridListTile className="tile" key={thread.id} cols={thread.cols || 1}>
           <Paper style={{padding: 20, marginTop: 10, marginBottom: 10}} elevation={2} variant="outlined" className="paper">
             <List className="list" style={{maxHeight: '100%', overflow: croll'}}>
           <h2>{thread.title}</h2>
           <h6>{thread.body}</h6>
             </List>
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
