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
        password: { type: GraphQLString }
    })
});

module.exports = UserType;