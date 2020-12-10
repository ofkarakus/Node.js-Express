const express = require("express");
const app = express();
const path = require('path')
require("dotenv").config();
const logger = require("morgan");
const port = process.env.PORT || 5001;
const host = "localhost";
const cookieParser = require('cookie-parser')

app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))

// middleware
app.use(express.static(__dirname + '/public'))

// console.log(process.env)  // Z_TEST has become accessible with dotenv module.

app.use(logger("dev"));
app.use(cookieParser())  //  cookie-parser provides req.cookies to be readable


// =======================================


app.get("/" , (req, res) => {
  res.render('index')
})

// =======================================

app.use((req, res, next) => {
  console.log(`\n=== Cookies: ${JSON.stringify(req.cookies)} ===\n`);
  next();
});

// =======================================

app.use((req, res, next) => {
  console.log("\n=== Authentication - (User Sign In) ===\n");

  // other required processes

  res.isAuthenticated = true;
  next();
});

app.use((req, res, next) => {
  console.log("\n=== Controller - (Database) ===\n");

  if (res.isAuthenticated) {
    console.log('Private data is accesible for the user.')
  } else {
    console.log('Not authenticated!!!')
  }

  next();
});

// ================================

app.use((req, res, next) => {
  console.log("\nMiddleware-1: session expiry check \n\n");
  const error = new Error("BOOOMMMM!!!!!");
  next(error); // only errors can be transferred with next()
});

app.use((err, req, res, next) => {
  console.log(err);
  console.log("\n\nMiddleware-2: user auth\n");
  res.firstName = "Oscar";
  req.lastName = "Thomson";
  next();
});

app.use((req, res, next) => {
  console.log("\nMiddleware-3: cookies\n");
  console.log("res.firstName", res.firstName);
  next();
});

app.get("/user", (req, res) => {
  res.send("\nMiddleware-4: USER DETAILS\n");
  console.log("req.lastName", req.lastName);
});

app.use((req, res, next) => {
  console.log("\nMiddleware-5: parsing data\n");
  if (true) {
    res.send(`${res.firstName} ${req.lastName}`);
  }
});

// ================================


const server = app.listen(port, host, () => {
  console.log(server.address()); // { address: '127.0.0.1', family: 'IPv4', port: 5001 }
  console.log("I'm listening on http://%s:%s", host, port);
});
