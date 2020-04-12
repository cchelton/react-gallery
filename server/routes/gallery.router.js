const express = require("express");
const router = express.Router();
const pool = require("../modules/pool");

// DO NOT MODIFY THIS FILE FOR BASE MODE

// PUT Route
router.put("/like/:id", (req, res) => {
  console.log(req.params);
  const galleryId = req.params.id;
  for (const galleryItem of galleryItems) {
    if (galleryItem.id == galleryId) {
      galleryItem.likes += 1;
    }
  }
  res.sendStatus(200);
}); // END PUT Route

// GET Route
router.get("/", (req, res) => {
  const queryText = `SELECT * FROM "galleryItems" ORDER BY "id" ASC;`;
  pool
    .query(queryText)
    .then((dbResponse) => {
      console.table(dbResponse.rows);
      res.send(dbResponse.rows);
    })
    .catch((err) => {
      console.log(`GET ERROR: ${err}`);
      res.sendStatus(500);
    });
}); // END GET Route

module.exports = router;
