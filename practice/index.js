const express = require("express");
const { conn } = require("./connect");
const app = express();
app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.redirect("/shopping");
});

app.get("/shopping", (req, res) => {
  const q = req.query.q ?? "";
  let query = "SELECT category,product,price FROM clothes ";
  if (q !== "") {
    query += `WHERE category = '${q}' AND sale = 0;`;
  } else {
    query += "WHERE sale = 0;";
  }

  conn.query(query, (e, results) => {
    if (e) return res.send(e);
    return res.render("shopping.ejs", { items: results });
  });
});

app.listen(3000);
