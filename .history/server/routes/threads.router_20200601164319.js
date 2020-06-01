const express = require("express");
const pool = require("../modules/pool");
const router = express.Router();

/**
 * GET route template
 */

router.get('/', (req, res) => {
  const queryText = `SELECT * FROM "post" ORDER BY "created" DESC;`;
  pool
    .query(queryText)
    .then((response) => {
        //console.log("===========>>", response.rows)
      res.send(response.rows);
    })
    .catch((error) => {
      console.log("ERROR IN THREAD QUERY", error);
      res.sendStatus(500);
    });
});

router.get('/blog/:id', (req, res) => {
  const queryText = `SELECT * FROM "post" WHERE "id" = $1;`;
  console.log('=================>>>>>>GET ROUTE FOR DETAILS', req.params.id);
  
  pool.query(queryText, [req.params.id])
  .then((result) =>{
    console.log('GET DETAILS!!!!!!!!', req.params.id);
    res.send(result.rows);
  }).catch((error) => {
    res.sendStatus(500)
    console.log(error);
    
  })
})

//Get all from favorites

/**
 * POST route template
 */

router.post("/", (req, res) => {
const newPost = `INSERT INTO "post"("title", "body", user_id)
VALUES ($1, $2, $3);`;
console.log("!!!!!!!!!", req.body)
const values = [req.body.title, req.body.body, req.user.id]
pool.query(newPost, values)
.then((response) => {
  res.sendStatus(201)
})
.catch((error) => {
  console.log('error in router POST', error);
})

});

//DELETE SELECTED POST
router.delete('/:id', (req, res) => {
  console.log('!!!!!!!!!', req.params.id)
  const thread = `DELETE FROM "post" WHERE "id" = $1;`;
  pool.query(thread, [req.params.id])
  .then((response) => {
    res.sendStatus(200)
  })
  .catch((error) => {
    console.log('ERROR DELETING!!!!!!', error);
    res.sendStatus(500)
    
  })
})

router.put('/', (req, res) =>{
  const queryText = `UPDATE "post" SET "title" = $1, "body" = $2, WHERE "id" = $3;`;
  console.log('!!!!!!!!!!!!!!!!!!!!!', req.body);
  pool.query(queryText, [req.body.title, req.body.body, req.params.id])
  .then((result) => {
    res.sendStatus(200)
  })
  
})
module.exports = router;
