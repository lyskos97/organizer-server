const mongoose = require('mongoose');

const NoteSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true
    },
    details: String,
    extra: String
  },
  {
    timestamps: true,
    collection: 'notes'
  }
);

module.exports = mongoose.model('Note', NoteSchema);
