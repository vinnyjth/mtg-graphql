"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var typeDefinitions = "\ntype Set {\n  id: String\n  name: String\n  border: String\n  type: String\n  url: String\n  cards_url: String\n  cards: [Card]\n}\n\ntype Printing {\n  set: Set\n  rarity: String,\n  artist: String\n  multiverse_id: Int\n  flavor: String\n  number: Int\n  layout: String\n  url: String,\n  image_url: String\n  set_url: String\n  store_url: String\n}\n\ntype Card {\n  name: String\n  id: String\n  url: String\n  store_url: String\n  types: [String]\n  colors: [String]\n  cmc: Int\n  cost: String\n  text: String\n  formats: LegalFormats\n  printings: [Printing]\n}\n\ntype LegalFormats {\n  commander: String\n  legacy: String\n  vintage: String\n}\n\ntype Price {\n  high: Float \n  medium: Float\n  low: Float\n}\n\nenum FormatName {\n  STANDARD\n  LEGACY\n  COMMANDER\n  VINTAGE\n}\n\nenum Legality {\n  BANNED\n  LEGAL\n  RESTRICTED\n}\n\nenum Color {\n  RED\n  BLUE\n  WHITE\n  BLACK\n  GREEN\n  COLORLESS\n}\n\ntype Query {\n  card(cardId: String): Card\n  set(setId: String): Set\n  sets: [Set]\n  cards(name: String): [Card]\n}\n\nschema {\n  query: Query\n}\n\n";

exports.default = [typeDefinitions];