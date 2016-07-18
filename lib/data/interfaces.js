'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _mtgApi = require('./mtg-api');

var _lodash = require('lodash');

var mtgInterface = {
  Cards: {
    getCards: function getCards(_ref) {
      var name = _ref.name;

      console.log(_mtgApi.MtgCards, name);
      return _mtgApi.MtgCards.getCards({ filters: { name: name } });
    },
    getCard: function getCard(_ref2) {
      var cardId = _ref2.cardId;

      return _mtgApi.MtgCards.getCard({ cardId: cardId });
    },
    getCardsForSet: function getCardsForSet(_ref3) {
      var set = _ref3.set;

      return _mtgApi.MtgCards.getCards({ filters: { set: set } });
    }
  },
  Sets: {
    getSetById: function getSetById(_ref4) {
      var setId = _ref4.setId;

      return _mtgApi.MtgSets.getSet({ setId: setId });
    },
    getSets: function getSets() {
      return _mtgApi.MtgSets.getSets();
    },
    getSetByName: function getSetByName(_ref5) {
      var name = _ref5.name;

      return _mtgApi.MtgSets.getSets().then(function (sets) {
        var set = (0, _lodash.find)(sets, { name: name });
        return set;
      });
    }
  }
};

exports.default = mtgInterface;