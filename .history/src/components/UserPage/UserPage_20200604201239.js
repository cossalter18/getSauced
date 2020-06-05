import React from 'react';
import { connect } from 'react-redux';
import LogOutButton from '../LogOutButton/LogOutButton';
import './UserPage.css'



// this could also be written with destructuring parameters as:
// const UserPage = ({ user }) => (
// and then instead of `props.user.username` you could use `user.username`
const UserPage = (props) => (


  <>
  <div>
    <h2 id="welcome">
      Welcome, { props.user.username }!
    </h2>
    <LogOutButton className="log-in" />
  </div>
  <div className="welcome">
    <div>
    <h2 className='rightPlace'>You've came to the right place</h2>
        <p>Looking for the latest sauce? Salsa? Grandmas pasta sauce The new hot marinade for those Beef Tips your grilling up? You have come to the right place. Here at Get Sauced we are focused on providing a community driven sauce collection. Whether you are here for a new recipe or to contribute to the growing sauce community we welcome everyone with open arms! </p>
        <p>You can dive right in by exploring the Blog Post page. You can find recipes here to suit your needs.</p>
        <p>If nothing on the Blog Post page catches your eye go ahead and try our Get a Sauce tab. This tab will provide you with a random sauce recipe, so we suggest you use it before you go to the grocery store!</p>
      </div>
  </div>
  </>
);

// Instead of taking everything from state, we just want the user info.
// if you wanted you could write this code like this:
// const mapStateToProps = ({user}) => ({ user });
const mapStateToProps = state => ({
  user: state.user,
});

// this allows us to use <App /> in index.js
export default connect(mapStateToProps)(UserPage);
