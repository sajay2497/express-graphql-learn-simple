const graphql = require('graphql');
// const { buildResolveInfo } = require('graphql/execution/execute');
const {
    GraphQLObjectType,
    GraphQLSchema,
    GraphQLInt,
    GraphQLString,
    GraphQLList
} = graphql;

const UserType = new GraphQLObjectType({
    name: 'user',
    fields: () => ({
        name: { type: GraphQLString },
        email: { type: GraphQLString },
        phone: { type: GraphQLString }
    })
});

const User = require('./models/user');
const RootQuery = new GraphQLObjectType({
    name: 'xyz',
    fields: {
        users: {
            type: new GraphQLList(UserType),
            resolve(parent, aggs){
                let data = User.find();
                return data
            }
        }
    }
})

module.exports = new GraphQLSchema({ query: RootQuery })