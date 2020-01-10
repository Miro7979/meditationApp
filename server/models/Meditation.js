const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let meditationSchema = new Schema({
  name: String,
  image: String,
  text: String,
  video: String,
  date: { type: Date, default: Date.now },
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
})

module.exports = mongoose.model('Meditation', meditationSchema);