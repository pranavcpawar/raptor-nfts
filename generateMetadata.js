const fs = require("fs");

for (let i = 1; i < 65; i++) {
  const json = {};
  json.name = "RaptorsNFT #" + i;
  json.description = "RaptorsNFT is a collection of top 65 pokemons. The collection showcases normal, mega evolved and gigantamax pokemons from the pokedex";
  json.price = 0.01;
  json.imageURL = "" + i + ".png";
  fs.writeFileSync("" + i, JSON.stringify(json));
}
