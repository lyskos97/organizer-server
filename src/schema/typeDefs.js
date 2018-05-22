module.exports = `
  type Query {
    notes: [Note]
  }

  type Note {
    id: String!
    title: String!
    details: String
    extra: String
    createdAt: String
    updatedAt: String
  }

  type Mutation {
    addNote(title: String!, details: String, extra: String): Note!
    updateNote(id: String!, title: String, details: String, extra: String): Note
  }
`;
