import { MtgCards, MtgSets } from './mtg-api';
import { find } from 'lodash';

const mtgInterface = {
  Cards: {
    getCards({ name }) {
      console.log(MtgCards, name);
      return MtgCards.getCards({ filters: { name } });
    },
    getCard({ cardId }) {
      return MtgCards.getCard({ cardId });
    },
    getCardsForSet({ set }) {
      return MtgCards.getCards({ filters: { set } });
    },
  },
  Sets: {
    getSetById({ setId }) {
      return MtgSets.getSet({ setId });
    },
    getSets() {
      return MtgSets.getSets();
    },
    getSetByName({ name }) {
      return MtgSets.getSets().then((sets) => {
        const set = find(sets, { name });
        return set;
      });
    },
  },
};

export default mtgInterface;
