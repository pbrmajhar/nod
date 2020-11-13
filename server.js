const express = require("express");
const app = express();
const articleRouter = require("./routes/article.route");

app.use("/articles", articleRouter);

app.set("view engine", "ejs");

app.get("/", (req, res) => {
  const articles = [
    {
      title: "New Article for express",
      date: new Date(),
      description: "this is the desc of the article",
    },
  ];
  res.render("index", { articles: articles });
});

const port = process.env.PORT || 3000;

app.listen(port);
