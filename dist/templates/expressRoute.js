const express = require("express");
const router = express.Router();

// GET endpoint
router.get("/", (req, res) => {
  res.send("GET request to the homepage");
});

// POST endpoint
router.post("/", (req, res) => {
  res.send("POST request to the homepage");
});

// PUT endpoint
router.put("/:id", (req, res) => {
  res.send(`PUT request to update item with id ${req.params.id}`);
});

// DELETE endpoint
router.delete("/:id", (req, res) => {
  res.send(`DELETE request to delete item with id ${req.params.id}`);
});

module.exports = router;
