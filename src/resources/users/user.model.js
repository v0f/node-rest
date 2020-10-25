const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    login: { type: String, required: true },
    password: { type: String, required: true, select: false }
  },
  { toJSON: { virtuals: true, useProjection: true } }
);

module.exports = mongoose.model('User', UserSchema);
