import React, { Component } from 'react';


const axios = require('axios')

class AboutPage extends Component {

componentDidMount = () =>{
  this.getRandom()
}

getRandom=()=>{
  const axios = require("axios");

  axios({
    "method": "GET",
    "url": "https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/random",
    "headers": {
      "content-type": "application/octet-stream",
      "x-rapidapi-host": "spoonacular-recipe-food-nutrition-v1.p.rapidapi.com",
      "x-rapidapi-key": "c31d4b7038mshacdc5b1ac5dafd5p11278fjsnc256fb5cf578",
      "useQueryString": true
    }, "params": {
      "number": "1",
      "tags": "vegetarian%2Cdessert"
    }
  })
    .then((response) => {
      console.log(response)
    })
    .catch((error) => {
      console.log(error)
    })
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