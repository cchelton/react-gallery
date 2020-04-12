const express = require("express");
const router = express.Router();
const pool = require("../modules/pool");

// DO NOT MODIFY THIS FILE FOR BASE MODE

// PUT Route
router.put("/like/:id", (req, res) => {
  console.log(req.params);
  const queryText = `UPDATE "galleryItems" SET "likes" = ("likes" + 1) WHERE "id" = $1;`;
  pool
    .query(queryText, [req.params.id])
    .then((dbResponse) => {
      console.log(`PUT SUCCESS`);
      res.sendStatus(200);
    })
    .catch((err) => {
      console.log(err);
      res.sendStatus(500);
    });
}); // END PUT Route

// GET Route
router.get("/", (req, res) => {
  const queryText = `SELECT * FROM "galleryItems" ORDER BY "id" ASC;`;
  pool
    .query(queryText)
    .then((dbResponse) => {
      console.log(`GET SUCCESS`);
      console.table(dbResponse.rows);
      res.send(dbResponse.rows);
    })
    .catch((err) => {
      console.log(`GET ERROR: ${err}`);
      res.sendStatus(500);
    });
}); // END GET Route

module.exports = router;
