const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const articlesSchema = new Schema({
  title: { type: String, required: true },
  date: { type: String, required: true },
  URL: { type: String, required: true }

});

const Article = mongoose.model("Article", articlesSchema);

module.exports = Article;
