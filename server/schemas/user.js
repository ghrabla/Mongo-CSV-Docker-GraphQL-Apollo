const User = require('../models/user')

const {
  GraphQLObjectType,
  GraphQLID,
  GraphQLString,
  GraphQLSchema,
  GraphQLList,
  GraphQLNonNull,
  GraphQLEnumType,
} = require('graphql');

// User Type
const UserType = new GraphQLObjectType({
    name: 'User',
    fields: () => ({
      id: { type: GraphQLID },
      fullname: { type: GraphQLString },
      email: { type: GraphQLString },
      password: { type: GraphQLString },
    }),
  });


  const RootQuery = new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
      users: {
        type: new GraphQLList(UserType),
        resolve(parent, args) {
          return User.find();
        },
      },
      user: {
        type: UserType,
        args: { id: { type: GraphQLID } },
        resolve(parent, args) {
          return User.findById(args.id);
        },
      },
    },
  });


  // Mutations
const mutation = new GraphQLObjectType({
    name: 'Mutation',
    fields: {
      // Add a client
      addUser: {
        type: UserType,
        args: {
          fullname: { type: GraphQLNonNull(GraphQLString) },
          email: { type: GraphQLNonNull(GraphQLString) },
          password: { type: GraphQLNonNull(GraphQLString) },
        },
        resolve(parent, args) {
          const user = new User({
            fullname: args.name,
            email: args.email,
            password: args.password,
          });
  
          return user.save();
        },
      },
      // Delete a user
      deleteUser: {
        type: UserType,
        args: {
          id: { type: GraphQLNonNull(GraphQLID) },
        },
        resolve(parent, args) {
          return User.findByIdAndRemove(args.id);
        },
      },
     
    },
  });

  module.exports = new GraphQLSchema({
    query: RootQuery,
    mutation,
  });