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

// POST ROUTE
router.post("/", (req, res) => {
  const reqData = req.body;
  const queryText = `INSERT INTO "galleryItems" ("path", "description", "likes")
    VALUES($1, $2, 0)`;

  pool
    .query(queryText, [reqData.path, reqData.description])
    .then((dbResponse) => {
      console.log(`POST SUCCESS`);
      res.sendStatus(201);
    })
    .catch((err) => {
      console.log(`POST ERROR: ${err}`);
      res.sendStatus(500);
    });
}); // END POST ROUTE

// DELETE ROUTE
router.delete("/delete/:id", (req, res) => {
  const reqID = req.params.id;
  const queryText = `DELETE FROM "galleryItems" WHERE "id"=$1`;
  pool
    .query(queryText, [reqID])
    .then((dbResponse) => {
      console.log(`DELETE SUCCESS`);
      res.sendStatus(200);
    })
    .catch((err) => {
      console.log(`DELETE ERR: ${err}`);
      res.sendStatus(500);
    });
});

module.exports = router;
