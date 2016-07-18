"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

function _objectDestructuringEmpty(obj) { if (obj == null) throw new TypeError("Cannot destructure undefined"); }

var resolveFunctions = {
  Query: {
    sets: function sets(_, _ref, context) {
      var setId = _ref.setId;

      return context.Sets.getSetById({ setId: setId });
    },
    set: function set(_, _ref2, context) {
      _objectDestructuringEmpty(_ref2);

      return context.Sets.getSet();
    },
    cards: function cards(_, _ref3, context) {
      var name = _ref3.name;

      return context.Cards.getCards({ name: name });
    },
    card: function card(_, _ref4, context) {
      var cardId = _ref4.cardId;

      return context.Cards.getCard({ cardId: cardId });
    }
  },
  Card: {
    printings: function printings(card) {
      return card.editions;
    },
    formats: function formats(card) {
      return card.formats;
    }
  },
  Set: {
    cards: function cards(set, _, context) {
      return context.Cards.getCardsForSet({ set: set.id });
    }
  },
  Printing: {
    set: function set(printing, _, context) {
      return context.Sets.getSetByName({ name: printing.set });
    }
  }
};

exports.default = resolveFunctions;