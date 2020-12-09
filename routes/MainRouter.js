// exports.getMain = (req, res) => {
//   res.render("main");
// };

const express = require("express");
const router = express.Router();

// ========================

// router.get("/", (req, res) => {
//   res.render("main", { name: 'John' });
// });

router.get("/", (req, res) => {
  res.render("main", { name: req.query.name });
});
// http://localhost:5000/?name=Oscar

// =======================

router.post("/", (req, res) => {
  res.send("post")
})

// default export (old) method
module.exports = router