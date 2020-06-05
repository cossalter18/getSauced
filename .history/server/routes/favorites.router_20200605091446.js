const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

/**
 * GET route for favorites
 */
router.get('/', (req, res) => {
    //make a join between post & fav
    const queryText = `SELECT "post_id", "body", "title", "post"."user_id", "favorite"."id" AS favorite_id FROM "favorite"
JOIN "post" ON "post"."id"="favorite"."post_id"
WHERE "post"."user_id" = $1;`;
    pool
        .query(queryText, [req.user.id])
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
    console.log('*********************', req.body.user_id)
    const queryText = `INSERT INTO "favorite"("post_id", "user_id")
    VALUES ($1, $2);`;
    const values = [req.body.post_id, req.body.user_id];
    pool.query(queryText, values)
        .then((response) => {
            res.sendStatus(201)
        })
        .catch((error) => {
            console.log('error in FAVORITES POST', error)
        })
});

router.delete('/:id', (req, res) => {
    console.log('!!!!!!!!!', req.params.id)
    const thread = `DELETE FROM "favorite" WHERE "id" = $1;`;
    pool.query(thread, [req.params.id])
        .then((response) => {
            res.sendStatus(200)
        })
        .catch((error) => {
            console.log('ERROR DELETING!!!!!!', error);
            res.sendStatus(500)

        })
})

module.exports = router;