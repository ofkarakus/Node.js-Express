const express = require("express");
const app = express();
const port = process.env.PORT || 5000;
const path = require("path");
const MainRouter = require("./routes/MainRouter");
const UserRouter = require("./routes/UserRouter");

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// ========================

// app.get("/", (request, response) => {
//   console.log("RESPONSE TO GET REQUESTS TO /.");

//   // response.send(
//   //   `Response ended with a message.. ${JSON.stringify({
//   //     id: "007",
//   //     name: "James Bond",
//   //   })}`
//   // );

//   // response.sendFile(path.join(__dirname, "about.html"));

//   response.render("main");
// });

// app.get("/", MainRouter.getMain);

app.use("/", MainRouter);

// ============================

// app.get("/user", (req, res) => {
//   res.send("User Page")
// })

// app.get("/user", UserRouter.getUser);

app.use("/user", UserRouter);

// ==============================

// app.listen(port, 'localhost', () => {
//   console.log(`I'm listening on ${port}`);
// });

app.listen(port, () => {
  console.log(`I'm listening on ${port}`);
});

// ================================
