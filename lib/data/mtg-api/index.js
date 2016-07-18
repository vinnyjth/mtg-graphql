'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MtgSets = exports.MtgCards = undefined;

var _requestPromise = require('request-promise');

var _requestPromise2 = _interopRequireDefault(_requestPromise);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var rootUrl = 'https://api.deckbrew.com/mtg';
var mtgRequest = _requestPromise2.default.defaults({
  baseUrl: rootUrl
});

var cardFilters = {
  type: String,
  subtype: String,
  supertype: String,
  name: String,
  oracle: String,
  set: String,
  rarity: String,
  color: String,
  multicolor: Boolean,
  multiverseid: String,
  format: String,
  status: String
};

var MtgCards = exports.MtgCards = {
  getCards: function getCards(_ref) {
    var filters = _ref.filters;

    var errors = [];
    var filtersKeys = Object.keys(filters);
    var allowedFilterKeys = Object.keys(cardFilters);

    var filterWhitelist = {};
    filtersKeys.forEach(function (key) {
      if (allowedFilterKeys.indexOf(key) === -1) {
        errors.push(key + ' is not a valid key for type Card');
      } else {
        filterWhitelist[key] = filters[key];
      }
    });
    return mtgRequest.get('/cards', { qs: filterWhitelist }).then(function (res) {
      return JSON.parse(res);
    }).then(function (res) {
      return res;
    });
  },
  getCard: function getCard(_ref2) {
    var cardId = _ref2.cardId;

    return mtgRequest.get('/cards/' + cardId).then(function (res) {
      return JSON.parse(res);
    }).then(function (res) {
      return res;
    });
  }
};
var MtgSets = exports.MtgSets = {
  getSets: function getSets() {
    return mtgRequest.get('/sets').then(function (res) {
      return JSON.parse(res);
    }).then(function (res) {
      return res;
    });
  },
  getSet: function getSet(_ref3) {
    var setId = _ref3.setId;

    return mtgRequest.get('/sets/' + setId).then(function (res) {
      return JSON.parse(res);
    }).then(function (res) {
      return res;
    });
  }
};

var MtgClient = {
  sets: MtgSets,
  cards: MtgCards
};

exports.default = MtgClient;