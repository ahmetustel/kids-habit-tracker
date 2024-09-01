const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  googleId: String,
  name: String,
  email: String,
  tasks: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Task' }],
  badges: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Badge' }],
});

module.exports = mongoose.model('User', UserSchema);
