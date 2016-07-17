const resolveFunctions = {
  Query: {
    sets(_, { setId }, context) {
      return context.Sets.getSetById({ setId });
    },
    set(_, {}, context) {
      return context.Sets.getSet();
    },
    cards(_, { name }, context) {
      return context.Cards.getCards({ name });
    },
    card(_, { cardId }, context) {
      return context.Cards.getCard({ cardId });
    },
  },
  Card: {
    printings(card) {
      return card.editions;
    },
    formats(card) {
      return card.formats;
    },
  },
  Set: {
    cards(set, _, context) {
      return context.Cards.getCardsForSet({ set: set.id });
    },
  },
  Printing: {
    set(printing, _, context) {
      return context.Sets.getSetByName({ name: printing.set });
    },
  },
};

export default resolveFunctions;
