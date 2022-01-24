import { gql } from "apollo-server-micro";

export const typeDefs = gql`
    type User {
        id: String
        name: String
        email: String
        image: String
        role: Role
        bookmarks: [Link]
    }

    enum Role {
        ADMIN
        USER
    }

    type Link {
        id: String
        category: String
        description: String
        imageUrl: String
        title: String
        url: String
        users: [User]
    }

    type Query {
        links: [Link]!
        # link(id: String!): Link!
        # user(id: String!): User!
        # users: [User]!
    }

    # type Mutation {
    #     createLink(category: String!, description: String!, imageUrl: String!, title: String!, url: String!): Link!
    #     deleteLink(id: String!): Link!
    #     updateLink(category: String, description: String, id: String, imageUrl: String, title: String, url: String): Link!
    # }
`