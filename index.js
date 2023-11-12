import { ApolloServer } from '@apollo/server'
import { startStandaloneServer } from '@apollo/server/standalone'
import db from './_db.js'

// types

import { typeDefs } from './schema.js'
const resolvers = {
    Query: {
        games() {
            return db.games
        }, game(_, arg) {
            return db.games.find(game => game.id === arg.id)
        },

        reviews() {
            return db.reviews
        },
        review(_, arg) {
            return db.reviews.find((review) => review.id === arg.id)
        }, authors() {
            return db.authors
        },
        author(_, arg) {
            return db.authors.find((review) => review.id === arg.id)
        },

    }
}
// server setup


const server = new ApolloServer({
    typeDefs,

    resolvers


})
const { url } = await startStandaloneServer(server, {
    listen: { port: 4000 }
})
console.log("Server ready at port", 4000)