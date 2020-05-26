import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router";
import "./BlogPost.css";

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

  //dispatch to watcher to get threads

  getThreads = () => {
    this.props.dispatch({ type: "GET_THREADS" });
  };

  render() {
    return (
      <div>
        <h3>
          <b>Thread:</b>
        </h3>
        <div className="nav-right">
            <button className="newPost" onClick={this.handleClick}>
              New Post!
            </button>
        </div>
        <li>
          <p>{JSON.stringify(this.props.reduxState.threadReducer)}</p>
        </li>
      </div>
    );
  }
}

const putStateOnProps = (reduxState) => ({ reduxState });
export default withRouter(connect(putStateOnProps)(BlogPost));
