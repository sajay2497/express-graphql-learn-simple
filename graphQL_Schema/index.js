const graphql = require('graphql');
// const { buildResolveInfo } = require('graphql/execution/execute');
const {
    GraphQLObjectType,
    GraphQLSchema,
    GraphQLInt,
    GraphQLString,
    GraphQLList
} = graphql;

const USER_LIST = require('./Queries/user')
const RootQuery = new GraphQLObjectType({
    name: 'xyz',
    fields: {
        users: USER_LIST,
    }
})

module.exports = new GraphQLSchema({ query: RootQuery })