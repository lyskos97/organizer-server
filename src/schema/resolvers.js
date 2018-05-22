const Note = require('./models/note');

module.exports = {
  Query: {
    notes: (source, args) => {
      return Note.find();
    }
  },
  Mutation: {
    addNote: (source, args) => {
      return Note.create(args);
    },
    updateNote: (source, { id, ...noteData }) => {
      console.log(id, '->', noteData);
      return Note.findByIdAndUpdate(id, noteData);
    }
  }
};
