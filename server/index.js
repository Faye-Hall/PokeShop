require("dotenv").config();
const nunjucks = require("nunjucks");
const express = require("express");
const ExpressError = require("./expressError");
const app = express();
const db = require("./db");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { authenticateToken } = require("./middleware/auth");
const { default: axios } = require("axios");
const bodyParser = require("body-parser");
const urlencodedParser = bodyParser.urlencoded({ extended: false });
const cors = require("cors");

app.use(express.json());
app.use(cors());

nunjucks.configure("views", {
  autoescape: true,
  express: app,
});

app.get(
  "/account",
  authenticateToken,
  urlencodedParser,
  async (req, res, next) => {
    username = req.username;

    const results = await db.query(
      `
  SELECT username, password
  FROM users
  WHERE username = $1`,
      [username]
    );

    const user = results.rows[0].username;

    return res.send(user);
  }
);

app.post("/delete", urlencodedParser, async (req, res, next) => {
  try {
    username = req.body.username;

    const results = await db.query(
      ` DELETE FROM users
        WHERE username = $1`,
      [username]
    );

    res.clearCookie("accessToken");

    return res.redirect("/account");
  } catch (e) {
    next(e);
  }
});

app.post("/register", urlencodedParser, async (req, res, next) => {
  try {
    // make sure info is valid
    const { username, password } = req.body;

    if (!username || !password) {
      return res.render("username_password_required_register.html");
    }

    // check if username is already in database
    const userCheck = await db.query(
      `SELECT username FROM users WHERE username = $1`,
      [username]
    );

    if (userCheck.rows.length !== 0) {
      return res.render("username_already_taken.html");
    }

    //hash password
    const hashedpw = await bcrypt.hash(password, 12);
    //send to db
    const results = await db.query(
      ` INSERT INTO users (username, password)
    VALUES ($1, $2)
    RETURNING username`,
      [username, hashedpw]
    );

    const newUser = results.rows[0];

    const getNewUser = await db.query(
      `
        SELECT username, password
        FROM users
        WHERE username = $1`,
      [newUser.username]
    );
    // give token

    if (getNewUser !== undefined) {
      if (await bcrypt.compare(password, hashedpw)) {
      }

      const accessToken = jwt.sign(
        newUser.username,
        process.env.ACCESS_TOKEN_SECRET_KEY
      );

      res.cookie("accessToken", accessToken, {
        httpOnly: false,
      });

      return res.redirect("/");
    }
  } catch (e) {
    return next(e);
  }
});

app.post("/login", urlencodedParser, async (req, res, next) => {
  try {
    // make sure info is valid

    const { username, password } = req.body;
    if (!username || !password) {
      return res.render("username_password_required.html");
    }
    // query db for user

    const results = await db.query(
      `
  SELECT username, password
  FROM users
  WHERE username = $1`,
      [username]
    );
    const user = results.rows[0];
    //check for user and password match and give token

    if (user !== undefined) {
      if (await bcrypt.compare(password, user.password)) {
        const accessToken = jwt.sign(user, process.env.ACCESS_TOKEN_SECRET_KEY);

        res.cookie("accessToken", accessToken, {
          httpOnly: false,
        });
        return res.redirect("/");
      } else {
        return res.render("invalid_username_password.html");
      }
    } else {
      return res.render("invalid_username_password.html");
    }
  } catch (e) {
    next(e);
  }
});

/** 404 handler */
app.use(function (req, res, next) {
  const err = new ExpressError("Not Found", 404);
  return next(err);
});

/** general error handler */
app.use((err, req, res, next) => {
  res.status(err.status || 500);

  return res.json({
    error: err,
    message: err.message,
  });
});
//** Server Port */
app.listen(3001, () => {
  console.log("Server running on port 3001");
});

module.exports = app;
