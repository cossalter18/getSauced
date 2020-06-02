const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

/**
 * GET route for favorites
 */
router.get('/', (req, res) => {
    const queryText = `SELECT * FROM "favorites" WHERE "user_id" = "user_id;`;
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
 * POST route for favorites
 */
router.post('/', (req, res) => {
    const queryText = `INSERT INTO "favorite"("id", , user_id)
VALUES ($1, $2, $3);`;

});

module.exports = router;