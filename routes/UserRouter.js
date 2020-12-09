// exports.getUser = (req, res) => {
//   res.send("User Page");
// };

const express = require("express");
const router = express.Router();
const data = require("../models/data");

/*
path: /user  <== (main path)
"/" ==> /user
*/

// ========================

// router.get("/", (req, res) => {
//   res.send("User Main Page");
// });

router.get("/", (req, res) => {
  res.render("user", { users: data.userList });
});

// ========================

router.get("/add", (req, res) => {
  res.send("User Add Page");
});

// =========================

// router.get("/:id", (req, res) => {
//   res.send("User Id Page");
// });

router.get("/:id", (req, res) => {
  res.render("user", {users: data.userList, id: req.params.id })
})

// ===========================

// default export (old) method
module.exports = router;
