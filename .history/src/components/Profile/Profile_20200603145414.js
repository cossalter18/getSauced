import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router";
import './Profile.css'

class Profile extends Component {
  // state = {
  //   fname: '',
  //   lname: '',
  //   email: '',
  //   zip: ''
  // };

  // componentDidMount() {
  //   const { fname } = this.props;
  //   this.setState({
  //     fname
  //   })
  // }

  handleClick = () => {
    console.log("handleClick");
    this.props.dispatch({type: 'UPDATE_INFO', payload: this.state})
  };

  updateInfo = (event) => {
    const { target: { value } } = event
    this.setState({
      fname: value,
      lname: value,
      email: value,
      zip: value
    })
  }

  changeEditMode = () => {
    console.log('EDIT MODE CHANGE');
    this.setState({
      isInEditMode: !this.state.isInEditMode
    })
    
  }


  render() {
    return (
      <>
        <div className="welcome">
          <h2>Update Your Info</h2>
          <p>{JSON.stringify(this.props.reduxState.user.fname)}</p>
        </div>
        <div onDoubleClick={this.changeEditMode} className="profileInputs">
          <input type="text" value={this.props.reduxState.user.fname} placeholder="First Name" name="fname" onChange={this.updateInfo}></input>
          <input type="text" value={this.props.reduxState.user.lname} placeholder="Last Name" name="lname" onChange={this.updateInfo}></input>
          <input type="text" value={this.props.reduxState.user.email} placeholder="Email" name="email" onChange={this.updateInfo}></input>
          <input type="text" value={this.props.reduxState.user.zip} placeholder="Zip" name="zip" onChange={this.updateInfo}></input>
        </div>
        <div>
          <button className="profileButton" onClick={this.handleClick}>
            Re-Sauce!
          </button>
        </div>
      </>
    );
  }
}

const putStateOnProps = (reduxState) => ({ reduxState });
export default withRouter(connect(putStateOnProps)(Profile));
