const typeDefinitions = `
type Set {
  id: String
  name: String
  border: String
  type: String
  url: String
  cards_url: String
  cards: [Card]
}

type Printing {
  set: Set
  rarity: String,
  artist: String
  multiverse_id: Int
  flavor: String
  number: Int
  layout: String
  url: String,
  image_url: String
  set_url: String
  store_url: String
}

type Card {
  name: String
  id: String
  url: String
  store_url: String
  types: [String]
  colors: [String]
  cmc: Int
  cost: String
  text: String
  formats: LegalFormats
  printings: [Printing]
}

type LegalFormats {
  commander: String
  legacy: String
  vintage: String
}

type Price {
  high: Float 
  medium: Float
  low: Float
}

enum FormatName {
  STANDARD
  LEGACY
  COMMANDER
  VINTAGE
}

enum Legality {
  BANNED
  LEGAL
  RESTRICTED
}

enum Color {
  RED
  BLUE
  WHITE
  BLACK
  GREEN
  COLORLESS
}

type Query {
  card(cardId: String): Card
  set(setId: String): Set
  sets: [Set]
  cards(name: String): [Card]
}

schema {
  query: Query
}

`;

export default [typeDefinitions];
