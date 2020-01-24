const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let meditationSchema = new Schema({
  name: String,
  image: String,
  text: String,
  video: String,
  date: { type: Date, default: Date.now }
})

module.exports = mongoose.model('Meditation', meditationSchema);