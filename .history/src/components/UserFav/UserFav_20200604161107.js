import React, { Component } from "react";
import { connect } from "react-redux"
import { withRouter } from "react-router";
import GridList from '@material-ui/core/GridList'
import { Paper } from '@material-ui/core'
import GridListTile from '@material-ui/core/GridListTile'
import "./UserFav.css"
import { List } from '@material-ui/core'

class UserFav extends Component {


  //we will render all the favorites here for the user
  componentDidMount = () => {
    this.getFavorites();
  }


  getFavorites = (thread) => {
    this.props.dispatch({ type: "GET_FAVORITES" })
    console.log("===============>>>", this.props.reduxState.user.id)
  }

  // viewFav = (id) => {
  //   console.log('Favorite Clicked');
  //   this.props.history.push(`/show/${id}`)
  // }
  removeFav = (event, post_id) => {
    console.log('remove clicked', post_id.id);
    // if (this.props.reduxState.user.id === thread.user_id) {
    //   this.props.dispatch({ type: 'DELETE_POST', payload: thread.id })
    // } else {
    //   alert('Trying to destroy someones sauce? Not cool...')
    // }
  }
    
  

  render() {
    return (
      <>
        <div>
          <h2 className="sauce">Secret Sauces</h2>
          {/* <p>{JSON.stringify(this.props.reduxState.favoritesReducer)}</p> */}
        </div>
       
          {this.props.reduxState.favoritesReducer.map((thread, index) => (
            
                  <div key={thread.id}className="scroll">
                    <h2>{thread.title}</h2>
                    <h6>{thread.body}</h6>
                    <button className="removeBut" onClick={(event) =>this.removeFav(event, post_id)}>Remove</button>
                  </div>
              
          ))}
     
      </>
    );
  }
}



const putStateOnProps = (reduxState) => ({ reduxState });
export default withRouter(connect(putStateOnProps)(UserFav));
