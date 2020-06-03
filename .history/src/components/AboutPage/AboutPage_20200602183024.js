import React, { Component } from 'react';


const axios = require('axios')

class AboutPage extends Component {

componentDidMount()={
  this.getRandom()
}
  render() {
    return (
      <div>
        <h2>FILL INFO</h2>
      </div>
    )
  }
}

export default AboutPage;