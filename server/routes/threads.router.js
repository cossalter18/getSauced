const express = require("express");
const pool = require("../modules/pool");
const router = express.Router();

/**
 * GET route template
 */

router.get('/', (req, res) => {
  const queryText = `SELECT * FROM "posts";`;
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

/**
 * POST route template
 */

router.post("/", (req, res) => {


});

module.exports = router;
