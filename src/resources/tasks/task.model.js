const mongoose = require('mongoose');

const TaskSchema = new mongoose.Schema(
  {
    title: { type: String, required: true, maxlength: 1000 },
    order: { type: Number },
    description: { type: String },
    user: { type: mongoose.Schema.ObjectId, ref: 'User', alias: 'userId' },
    board: { type: mongoose.Schema.ObjectId, ref: 'Board', alias: 'boardId' },
    columnId: { type: Number }
  },
  { toJSON: { virtuals: true, useProjection: true } }
);

module.exports = mongoose.model('Task', TaskSchema);
