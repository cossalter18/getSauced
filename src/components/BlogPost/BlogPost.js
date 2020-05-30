import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router";
import "./BlogPost.css";
import { Container } from '@material-ui/core'

// This is one of our simplest components
// It doesn't have local state, so it can be a function component.
// It doesn't dispatch any redux actions or display any part of redux state
// or even care what the redux state is, so it doesn't need 'connect()'
class BlogPost extends Component {


  componentDidMount() {
    this.getThreads();
  }

  handleClick = () => {
    console.log("handleClick");
    this.props.history.push('/new')
  };

  handleClickFavorite = () => {
    console.log('handleCLick for favorite');
  }

  handleClickShow = () => {
    console.log('titleClicked');
  }

  handleDelete = (event, thread) => {
    console.log('deleteClicked', thread.id);
     if (this.props.reduxState.user.id === thread.user_id){
       this.props.dispatch({type: 'DELETE_POST', payload: thread.id})
     } else {
       alert('Trying to destroy someones sauce? Not cool...')
     }
  }

  handleEdit = () => {
    console.log('editClicked');

  }


  //dispatch to watcher to get threads

  getThreads = () => {
    this.props.dispatch({ type: "GET_THREADS" });
  };

  render() {


    return (
      <div>
        <div className="nav-right">
          <button className="newPost" onClick={this.handleClick}>
            New Post!
            </button>
        </div>
        <b>Thread:</b>
        <p>{JSON.stringify(this.props.reduxState.threadReducer)}</p>
        {this.props.reduxState.threadReducer.map((thread) => {
          return (
            <div className="container">
              <Container fixed >
                <div className="child">
                  <div key={thread.id}>
                    <h2 onClick={this.handleClickShow}>{thread.title}</h2>
                    <p>{thread.body}</p>
                    <p>created by: {thread.created}</p>
                    <button onClick={this.handleClickFavorite}>Add to Favorites</button>
                    <button onClick={this.handleEdit}>Edit</button>
                    <button variant="danger" onClick={(event) => this.handleDelete(event, thread)}>Delete</button>
                  </div>
                </div>
              </Container>
            </div>
          )
        }
        )}
      </div>
    );
  }
}

// const reduxStateToProps = (reduxState) => {
//   return {
//     threadItems: reduxState.threadReducer
//   }
// }
// export default withRouter(connect(reduxStateToProps)(BlogPost));


const putStateOnProps = (reduxState) => ({ reduxState });
export default withRouter(connect(putStateOnProps)(BlogPost));
