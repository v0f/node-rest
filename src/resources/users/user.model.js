const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const UserSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    login: { type: String, required: true },
    password: { type: String, required: true, select: false }
  },
  { toJSON: { virtuals: true, useProjection: true } }
);

UserSchema.pre('save', async function save(next) {
  this.password = await bcrypt.hash(this.password, 10);
  next();
});

module.exports = mongoose.model('User', UserSchema);
