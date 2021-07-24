const User = require('../../models/user');
const { GraphQLList } = require('graphql');
const UserType = require('../TypeDefs/UserType');

const USER_LIST = {
    type: new GraphQLList(UserType),
    resolve(parent, aggs) {
        let data = User.find();
        return data
    }
}

module.exports = USER_LIST