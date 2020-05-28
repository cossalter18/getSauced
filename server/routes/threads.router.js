const express = require("express");
const pool = require("../modules/pool");
const router = express.Router();

/**
 * GET route template
 */

router.get('/', (req, res) => {
  const queryText = `SELECT * FROM "post";`;
  pool
    .query(queryText)
    .then((response) => {
        console.log("===========>>", response.rows)
      res.send(response.rows);
    })
    .catch((error) => {
      console.log("ERROR IN THREAD QUERY", error);
      res.sendStatus(500);
    });
});


//Get all from favorites
router.get('/', (req, res) => {
  const queryText =`SELECT * FROM "favorites";`;
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

router.post("/", (req, res) => {
const newPost = `INSERT INTO "post"("title", "body", "id", username)
VALUES ($1, $2, $3, $4);`;
console.log("!!!!!!!!!", req.body)
const values = [req.body.title, req.body.body, req.user.id, req.body.username]
pool.query(newPost, values)
.then((response) => {
  res.sendStatus(201)
})
.catch((error) => {
  console.log('error in router POST', error);
})

});

module.exports = router;
