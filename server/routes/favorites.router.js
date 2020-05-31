const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

/**
 * GET route template
 */
router.get('/', (req, res) => {
    const queryText = `SELECT * FROM "favorites";`;
    pool
        .query(queryText)
        .then((response) => {
            console.log('!!!!!!!!!!!!!', response.rows)
            res.send(response.rows)
        })
        .catch((error) => {
            console.log('ERROR IN FAVORITES QUERY', error);
        })
})

/**
 * POST route template
 */
router.post('/', (req, res) => {

});

module.exports = router;