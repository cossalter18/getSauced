import React, { Component } from 'react';
import {connect} from 'react-redux'
import {withRouter} from 'react-router'

// This is one of our simplest components
// It doesn't have local state, so it can be a function component.
// It doesn't dispatch any redux actions or display any part of redux state
// or even care what the redux state is, so it doesn't need 'connect()'
class BlogPost extends Component {

  componentDidMount() {
    this.getThreads()
  }


//dispatch to watcher to get threads

getThreads = () => {
  this.props.dispatch({type: 'GET_THREADS'})
}

  render() {
    return (
      <div>
        <h3>
          <b>Thread:</b>
        </h3>
        <li>
          <p>{JSON.stringify(this.props.reduxState.threadReducer)}</p>
        </li>
      </div>
    );
  }
}

const putStateOnProps = (reduxState) => ({reduxState})
export default withRouter(connect(putStateOnProps)(BlogPost))
