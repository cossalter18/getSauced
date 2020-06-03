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
    console.log
    const queryText = `INSERT INTO "favorite"("post_id", "user_id")
    VALUES ($1, $2);`;
    console.log('*********************',req.body.post_id)
    const values = [req.body.post_id, req.user.id];
    pool.query(queryText, values)
        .then((response) => {
            res.sendStatus(201)
        })
        .catch((error) => {
            console.log('error in FAVORITES POST', error)
        })
});

module.exports = router;