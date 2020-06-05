const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

/**
 * GET route for favorites
 */
router.get('/', (req, res) => {
    //this join is to ensure the logged in user is getting only their 
    const queryText = `SELECT "post_id", "body", "title", "post"."user_id", "favorite"."id" AS favorite_id FROM "favorite"
JOIN "post" ON "post"."id"="favorite"."post_id"
WHERE "post"."user_id" = $1;`;
console.log("LOOOOOOOOOOOOOOOOOOOOOOK", req.user.id)
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

//POST route used for adding favorites to the users account
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


//DELETE route for deleting user favorites
router.delete('/:id', (req, res) => {
    console.log('!!!!!!!!!', req.params.id)
    const thread = `DELETE FROM "favorite" WHERE "post_id" = $1;`;
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