const mongoose = require('mongoose');

const BoardSchema = new mongoose.Schema(
  {
    title: { type: String, required: true, maxlength: 1000 },
    columns: []
  },
  { toJSON: { virtuals: true } }
);

module.exports = mongoose.model('Board', BoardSchema);
