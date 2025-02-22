import React, { Component } from 'react';
import {connect} from 'react-redux';

class RegisterPage extends Component {
  state = {
    username: '',
    password: '',
    fname: '',
    lname: '',
    email:'',
    zip: ''
  };

  registerUser = (event) => {
    event.preventDefault();

    if (this.state.username && this.state.password && this.state.fname && this.state.lname && this.state.email && this.state.zip) {
      this.props.dispatch({
        type: 'REGISTER',
        payload: {
          username: this.state.username,
          password: this.state.password,
          fname: this.state.fname,
          lname: this.state.lname,
          email: this.state.email,
          zip: this.state.zip
        },
      });
    } else {
      this.props.dispatch({type: 'REGISTRATION_INPUT_ERROR'});
    }
  } // end registerUser

  handleInputChangeFor = propertyName => (event) => {
    this.setState({
      [propertyName]: event.target.value,
    });
  }

  render() {
    return (
      <div>
        {this.props.errors.registrationMessage && (
          <h2
            className="alert"
            role="alert"
          >
            {this.props.errors.registrationMessage}
          </h2>
        )}
        <form onSubmit={this.registerUser}>
          <h1>Register User</h1>
          <div>
            <label htmlFor="username">
              Username:
              <input type="text" name="username" value={this.state.username} onChange={this.handleInputChangeFor('username')}/>
            </label>
          </div>
          <div>
            <label htmlFor="fname">
              First Name:
              <input type="fname" name="fname" value={this.state.fname} onChange={this.handleInputChangeFor('fname')} />
            </label>
          </div>
          <div>
            <label htmlFor="lname">
              Last Name:
              <input type="lname" name="lname" value={this.state.lname} onChange={this.handleInputChangeFor('lname')} />
            </label>
          </div>
          <div>
            <label htmlFor="password">
              Password:
              <input type="password" name="password" value={this.state.password} onChange={this.handleInputChangeFor('password')}/>
            </label>
          </div>
          <div>
            <label htmlFor="email">
              Email:
              <input type="email" name="email" value={this.state.email} onChange={this.handleInputChangeFor('email')} />
            </label>
          </div>
          <div>
            <label htmlFor="zip">
              Zip:
              <input type="zip" name="zip" value={this.state.zip} onChange={this.handleInputChangeFor('zip')} />
            </label>
          </div>
          <div>
            <input className="register" type="submit" name="submit" value="Register"/>
          </div>
        </form>
        <center>
          <button type="button" className="link-button" onClick={() => {this.props.dispatch({type: 'SET_TO_LOGIN_MODE'})}}>
            Login
          </button>
        </center>
      </div>
    );
  }
}

// Instead of taking everything from state, we just want the error messages.
// if you wanted you could write this code like this:
// const mapStateToProps = ({errors}) => ({ errors });
const mapStateToProps = state => ({
  errors: state.errors,
});

export default connect(mapStateToProps)(RegisterPage);

