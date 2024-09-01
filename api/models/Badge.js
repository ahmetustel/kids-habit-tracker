const mongoose = require('mongoose');

const BadgeSchema = new mongoose.Schema({
  name: String,
  description: String,
  pointsRequired: Number,
});

module.exports = mongoose.model('Badge', BadgeSchema);
