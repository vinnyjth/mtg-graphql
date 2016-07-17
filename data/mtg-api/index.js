import request from 'request-promise';

const rootUrl = 'https://api.deckbrew.com/mtg';
const mtgRequest = request.defaults({
  baseUrl: rootUrl,
});

const cardFilters = {
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
  status: String,
};

export const MtgCards = {
  getCards({ filters }) {    
    const errors = [];
    const filtersKeys = Object.keys(filters);
    const allowedFilterKeys = Object.keys(cardFilters);

    const filterWhitelist = {};    
    filtersKeys.forEach((key) => {
      if (allowedFilterKeys.indexOf(key) === -1) {
        errors.push(`${key} is not a valid key for type Card`);
      } else {
        filterWhitelist[key] = filters[key];
      }
    });
    return mtgRequest.get('/cards', { qs: filterWhitelist })
      .then((res) => JSON.parse(res))
      .then((res) => {
        return res;
      });
  },
  getCard({ cardId }) {
    return mtgRequest.get(`/cards/${cardId}`)
      .then((res) => JSON.parse(res))
      .then((res) => {
        return res;
      });
  },
};
export const MtgSets = {
  getSets() {
    return mtgRequest.get('/sets')
      .then((res) => JSON.parse(res))
      .then((res) => {
        return res;
      });
  },
  getSet({ setId }) {
    return mtgRequest.get(`/sets/${setId}`)
      .then((res) => JSON.parse(res))
      .then((res) => {
        return res;
      });
  },
};

const MtgClient = {
  sets: MtgSets,
  cards: MtgCards,
};

export default MtgClient;
