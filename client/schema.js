export const typeDefs = `
  type Contact {
    id: ID!
    firstName: String
    lastName: String
  }

  type Query {
    contacts: [Contact],
    contact: Contact
  }

  type Subscription {
    contactAdded(id: String!, firstName: String!, lastName: String!): Contact
  }
`
