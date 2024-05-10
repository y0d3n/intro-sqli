const express = require("express");
const { conn } = require("./connect");
const app = express();
app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.render("index.ejs");
});

const space = "スペース禁止";
app.get("/shopping_space", (req, res) => {
  let q = req.query.q ?? "";
  let query = "SELECT category,product,price FROM clothes ";
  if (q !== "") {
    if (q.includes(" ")) {
      return res.send(space);
    }
    query += `WHERE category = '${q}' AND sale = 0;`;
  } else {
    query += "WHERE sale = 0;";
  }

  conn.query(query, (e, results) => {
    if (e) return res.send(e);
    return res.render("shopping.ejs", {
      items: results,
      query: query,
      msg: space,
    });
  });
});

const comma = "カンマ禁止";
app.get("/shopping_comma", (req, res) => {
  let q = req.query.q ?? "";
  let query = "SELECT category,product,price FROM clothes ";
  if (q !== "") {
    if (q.includes(",")) {
      return res.send(comma);
    }
    query += `WHERE category = '${q}' AND sale = 0;`;
  } else {
    query += "WHERE sale = 0;";
  }

  conn.query(query, (e, results) => {
    if (e) return res.send(e);
    return res.render("shopping.ejs", {
      items: results,
      query: query,
      msg: comma,
    });
  });
});

const quot = "シングルクォートをエスケープ";
app.get("/shopping_quot", (req, res) => {
  let q = req.query.q ?? "";
  let query = "SELECT category,product,price FROM clothes ";
  if (q !== "") {
    q = q.replace("'", "\\'");
    query += `WHERE category = '${q}' AND sale = 0;`;
  } else {
    query += "WHERE sale = 0;";
  }

  conn.query(query, (e, results) => {
    if (e) return res.send(e);
    return res.render("shopping.ejs", {
      items: results,
      query: query,
      msg: quot,
    });
  });
});

app.listen(3000);
