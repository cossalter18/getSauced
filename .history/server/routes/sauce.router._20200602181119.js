const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

/**
 * GET route template
 */
router.get('/', (req, res) => {
    
});

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
        "tags": "sauce"
    }
})
    .then((response) => {
        console.log(response)
    })
    .catch((error) => {
        console.log(error)
    })

/**
 * POST route template
 */
router.post('/', (req, res) => {

});

module.exports = router;