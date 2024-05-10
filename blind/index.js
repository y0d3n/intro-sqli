const express = require("express");
const { conn } = require("./connect");

const app = express();
app.set("view engine", "ejs");
app.use(express.urlencoded({
  extended: true,
}));

app.get("/", (req, res) => {
  res.redirect("/login");
});

app.get("/login", (req, res) => {
  res.render("login.ejs");
});

app.post("/login", (req, res) => {
  const username = req.body.username;
  const password = req.body.password;
  const query =
    `SELECT * FROM users WHERE username = '${username}' AND password = '${password}';`;

  conn.query(query, (error, results) => {
    if (error) return res.send(error);
    if (results.length > 0) {
      return res.send("ログイン成功！");
    } else {
      return res.send("ログイン失敗");
    }
  });
});

app.listen(3000);
