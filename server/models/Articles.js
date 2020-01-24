const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const articlesSchema = new Schema({
  title: String,
  body: String,
  startPageArticle1: String,
  startPageArticle2: String,
  startPageArticle3: String,
  helpPageArticle1: String,
  helpPageArticle2: String,
  helpPageArticle3: String,
  helpPageStep1: String,
  helpPageStep2: String,
  helpPageStep3: String,
  helpPageStep4: String,
  helpPageStep5: String,
  aboutUsPageArticle: String
});

module.exports = Articles = mongoose.model('Article', articlesSchema);