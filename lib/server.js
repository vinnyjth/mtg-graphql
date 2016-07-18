'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _graphqlTools = require('graphql-tools');

var _schema = require('./data/schema');

var _schema2 = _interopRequireDefault(_schema);

var _resolvers = require('./data/resolvers');

var _resolvers2 = _interopRequireDefault(_resolvers);

var _interfaces = require('./data/interfaces');

var _interfaces2 = _interopRequireDefault(_interfaces);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var GRAPHQL_PORT = 8080;

var graphQLServer = (0, _express2.default)();
graphQLServer.use('/graphql', (0, _graphqlTools.apolloServer)({
  graphiql: true,
  pretty: true,
  schema: _schema2.default,
  resolvers: _resolvers2.default,
  context: _interfaces2.default
}));
graphQLServer.listen(GRAPHQL_PORT, function () {
  return console.log('GraphQL Server is now running on http://localhost:' + GRAPHQL_PORT + '/graphql');
});