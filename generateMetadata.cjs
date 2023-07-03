const fs = require("fs");

const listAttributes = {
  0 : [
    {
      "trait_type": "Pokemon",
      "value": ["Legendary", "Mega Evolution"]
    },
    {
      "trait_type": "Type",
      "value": ["Dragon", "Pyschic"]
    },
    {
      "trait_type": "Weaknesses",
      "value": ["Ghost", "Dragon", "Bug", "Ice", "Fairy", "Dark"]
    },
    {
      "display_type": "number",
      "trait_type": "Generation",
      "value": 3
    }
  ],
  1 : [
    {
      "trait_type": "Pokemon",
      "value": "Mega Evolution"
    },
    {
      "trait_type": "Type",
      "value": ["Fire", "Dragon"]
    },
    {
      "trait_type": "Weaknesses",
      "value": ["Ground", "Rock", "Dragon"]
    },
    {
      "display_type": "number",
      "trait_type": "Generation",
      "value": 1
    }
  ],
  2 : [
    {
      "trait_type": "Pokemon",
      "value": "Mega Evolution"
    },
    {
      "trait_type": "Type",
      "value": ["Fighting", "Steel"]
    },
    {
      "trait_type": "Weaknesses",
      "value": ["Fire", "Fighting", "Ground"]
    },
    {
      "display_type": "number",
      "trait_type": "Generation",
      "value": 4
    }
  ],
  3 : [
    {
      "trait_type": "Pokemon",
      "value": "Ash-Greninja"
    },
    {
      "trait_type": "Type",
      "value": ["Water", "Dark"]
    },
    {
      "trait_type": "Weaknesses",
      "value": ["Electric", "Grass", "Fairy", "Bug", "Fighting"]
    },
    {
      "display_type": "number",
      "trait_type": "Generation",
      "value": 6
    }
  ],
  4 : [
    {
      "trait_type": "Pokemon",
      "value": ["Legendary", "Mega-Envolution"]
    },
    {
      "trait_type": "Type",
      "value": "Pyshic"
    },
    {
      "trait_type": "Weaknesses",
      "value": ["Ghost", "Dark", "Bug"]
    },
    {
      "display_type": "number",
      "trait_type": "Generation",
      "value": 1
    }
  ],
  5 : [
    {
      "trait_type": "Pokemon",
      "value": "Gigantamax"
    },
    {
      "trait_type": "Type",
      "value": "Fighting"
    },
    {
      "trait_type": "Weaknesses",
      "value": ["Fairy", "Psychic", "Flying"]
    },
    {
      "display_type": "number",
      "trait_type": "Generation",
      "value": 1
    }
  ],
  6 : [
    {
      "trait_type": "Pokemon",
      "value": ["Legendary", "Mega-Envolution"]
    },
    {
      "trait_type": "Type",
      "value": ["Pyshic", "Fighting"]
    },
    {
      "trait_type": "Weaknesses",
      "value": ["Ghost", "Fairy", "Flying"]
    },
    {
      "display_type": "number",
      "trait_type": "Generation",
      "value": 1
    }
  ],
  7 : [
    {
      "trait_type": "Pokemon",
      "value": "Mega Evolution"
    },
    {
      "trait_type": "Type",
      "value": ["Electric", "Dragon"]
    },
    {
      "trait_type": "Weaknesses",
      "value": ["Fairy", "Ground", "Dragon", "Ice"]
    },
    {
      "display_type": "number",
      "trait_type": "Generation",
      "value": 2
    }
  ],
  8 : [
    {
      "trait_type": "Pokemon",
      "value": "Mega Evolution"
    },
    {
      "trait_type": "Type",
      "value": ["Water", "Ground"]
    },
    {
      "trait_type": "Weaknesses",
      "value": "Grass"
    },
    {
      "display_type": "number",
      "trait_type": "Generation",
      "value": 3
    }
  ],
  9 : [
    {
      "trait_type": "Pokemon",
      "value": "Mega Evolution"
    },
    {
      "trait_type": "Type",
      "value": ["Steel", "Pyshic"]
    },
    {
      "trait_type": "Weaknesses",
      "value": ["Ghost", "Fire", "Dark", "Ground"]
    },
    {
      "display_type": "number",
      "trait_type": "Generation",
      "value": 3
    }
  ],
  10 : [
    {
      "trait_type": "Pokemon",
      "value": "Mega Evolution"
    },
    {
      "trait_type": "Type",
      "value": ["Steel", "Fairy"]
    },
    {
      "trait_type": "Weaknesses",
      "value": ["Fire", "Ground"]
    },
    {
      "display_type": "number",
      "trait_type": "Generation",
      "value": 3
    }
  ],
  11 : [
    {
      "trait_type": "Pokemon",
      "value": "Normal"
    },
    {
      "trait_type": "Type",
      "value": ["Grass", "Ground"]
    },
    {
      "trait_type": "Weaknesses",
      "value": ["Fire", "Bug", "Flying", "Ice"]
    },
    {
      "display_type": "number",
      "trait_type": "Generation",
      "value": 4
    }
  ],
  12 : [
    {
      "trait_type": "Pokemon",
      "value": "Normal"
    },
    {
      "trait_type": "Type",
      "value": "Water"
    },
    {
      "trait_type": "Weaknesses",
      "value": ["Electric", "Grass"]
    },
    {
      "display_type": "number",
      "trait_type": "Generation",
      "value": 6
    }
  ],
  13 : [
    {
      "trait_type": "Pokemon",
      "value": "Normal"
    },
    {
      "trait_type": "Type",
      "value": ["Fighting", "Steel"]
    },
    {
      "trait_type": "Weaknesses",
      "value": ["Fire", "Fighting", "Ground"]
    },
    {
      "display_type": "number",
      "trait_type": "Generation",
      "value": 4
    }
  ],
  14 : [
    {
      "trait_type": "Pokemon",
      "value": "Gigantamax"
    },
    {
      "trait_type": "Type",
      "value": "Water"
    },
    {
      "trait_type": "Weaknesses",
      "value": ["Grass", "Electric"]
    },
    {
      "display_type": "number",
      "trait_type": "Generation",
      "value": 1
    }
  ],
  15 : [
    {
      "trait_type": "Pokemon",
      "value": "Normal"
    },
    {
      "trait_type": "Type",
      "value": "Water"
    },
    {
      "trait_type": "Weaknesses",
      "value": ["Electric", "Grass"]
    },
    {
      "display_type": "number",
      "trait_type": "Generation",
      "value": 6
    }
  ],
  16 : [
    {
      "trait_type": "Pokemon",
      "value": "Mega Evolution"
    },
    {
      "trait_type": "Type",
      "value": ["Fire", "Flying"]
    },
    {
      "trait_type": "Weaknesses",
      "value": ["Water", "Electric", "Rock"]
    },
    {
      "display_type": "number",
      "trait_type": "Generation",
      "value": 1
    }
  ],
  17 : [
    {
      "trait_type": "Pokemon",
      "value": "Normal"
    },
    {
      "trait_type": "Type",
      "value": "Electric"
    },
    {
      "trait_type": "Weaknesses",
      "value": "Ground"
    },
    {
      "display_type": "number",
      "trait_type": "Generation",
      "value": 4
    }
  ],
  18 : [
    {
      "trait_type": "Pokemon",
      "value": "Normal"
    },
    {
      "trait_type": "Type",
      "value": "Fire"
    },
    {
      "trait_type": "Weaknesses",
      "value": ["Water", "Ground", "Rock"]
    },
    {
      "display_type": "number",
      "trait_type": "Generation",
      "value": 4
    }
  ],
  19 : [
    {
      "trait_type": "Pokemon",
      "value": "Normal"
    },
    {
      "trait_type": "Type",
      "value": "Water"
    },
    {
      "trait_type": "Weaknesses",
      "value": ["Grass", "Electric"]
    },
    {
      "display_type": "number",
      "trait_type": "Generation",
      "value": 5
    }
  ],
  20 : [
    {
      "trait_type": "Pokemon",
      "value": "Gigantamax"
    },
    {
      "trait_type": "Type",
      "value": "Normal"
    },
    {
      "trait_type": "Weaknesses",
      "value": "Fighting"
    },
    {
      "display_type": "number",
      "trait_type": "Generation",
      "value": 1
    }
  ],
  21 : [
    {
      "trait_type": "Pokemon",
      "value": "Normal"
    },
    {
      "trait_type": "Type",
      "value": ["Normal", "Flying"]
    },
    {
      "trait_type": "Weaknesses",
      "value": ["Electric", "Rock", "Ice"]
    },
    {
      "display_type": "number",
      "trait_type": "Generation",
      "value": 5
    }
  ],
  22 : [
    {
      "trait_type": "Pokemon",
      "value": "Normal"
    },
    {
      "trait_type": "Type",
      "value": ["Rock", "Ice"]
    },
    {
      "trait_type": "Weaknesses",
      "value": ["Steel", "Fighting", "Water", "Rock", "Grass", "Ground"]
    },
    {
      "display_type": "number",
      "trait_type": "Generation",
      "value": 6
    }
  ],
  23 : [
    {
      "trait_type": "Pokemon",
      "value": "Normal"
    },
    {
      "trait_type": "Type",
      "value": "Fairy"
    },
    {
      "trait_type": "Weaknesses",
      "value": ["Steel", "Poison"]
    },
    {
      "display_type": "number",
      "trait_type": "Generation",
      "value": 6
    }
  ],
  24 : [
    {
      "trait_type": "Pokemon",
      "value": "Normal"
    },
    {
      "trait_type": "Type",
      "value": ["Fighting", "Electric"]
    },
    {
      "trait_type": "Weaknesses",
      "value": ["Fairy", "Psychic", "Ground"]
    },
    {
      "display_type": "number",
      "trait_type": "Generation",
      "value": 9
    }
  ],
  25 : [
    {
      "trait_type": "Pokemon",
      "value": "Normal"
    },
    {
      "trait_type": "Type",
      "value": "Water"
    },
    {
      "trait_type": "Weaknesses",
      "value": ["Grass", "Electric"]
    },
    {
      "display_type": "number",
      "trait_type": "Generation",
      "value": 1
    }
  ],
  26 : [
    {
      "trait_type": "Pokemon",
      "value": "Gigantamax"
    },
    {
      "trait_type": "Type",
      "value": "Electric"
    },
    {
      "trait_type": "Weaknesses",
      "value": "Ground"
    },
    {
      "display_type": "number",
      "trait_type": "Generation",
      "value": 1
    }
  ],
  27 : [
    {
      "trait_type": "Pokemon",
      "value": "Gigantamax"
    },
    {
      "trait_type": "Type",
      "value": ["Water", "Ice"]
    },
    {
      "trait_type": "Weaknesses",
      "value": ["Grass", "Electric", "Fighting", "Rock"]
    },
    {
      "display_type": "number",
      "trait_type": "Generation",
      "value": 1
    }
  ],
  28 : [
    {
      "trait_type": "Pokemon",
      "value": "Mega Evolution"
    },
    {
      "trait_type": "Type",
      "value": ["Bug", "Poison"]
    },
    {
      "trait_type": "Weaknesses",
      "value": ["Fire", "Psychic", "Flying", "Rock"]
    },
    {
      "display_type": "number",
      "trait_type": "Generation",
      "value": 1
    }
  ],
  29 : [
    {
      "trait_type": "Pokemon",
      "value": "Mega Evolution"
    },
    {
      "trait_type": "Type",
      "value": ["Ghost", "Poison"]
    },
    {
      "trait_type": "Weaknesses",
      "value": ["Ghost", "Psychic", "Dark", "Ground"]
    },
    {
      "display_type": "number",
      "trait_type": "Generation",
      "value": 1
    }
  ],
  30 : [
    {
      "trait_type": "Pokemon",
      "value": "Gigantamax"
    },
    {
      "trait_type": "Type",
      "value": ["Fire", "Flying"]
    },
    {
      "trait_type": "Weaknesses",
      "value": ["Water", "Electric", "Rock"]
    },
    {
      "display_type": "number",
      "trait_type": "Generation",
      "value": 1
    }
  ],
  31 : [
    {
      "trait_type": "Pokemon",
      "value": "Mega Evolution"
    },
    {
      "trait_type": "Type",
      "value": "Water"
    },
    {
      "trait_type": "Weaknesses",
      "value": ["Grass", "Electric"]
    },
    {
      "display_type": "number",
      "trait_type": "Generation",
      "value": 1
    }
  ],
  32 : [
    {
      "trait_type": "Pokemon",
      "value": "Normal"
    },
    {
      "trait_type": "Type",
      "value": "Water"
    },
    {
      "trait_type": "Weaknesses",
      "value": ["Grass", "Electric"]
    },
    {
      "display_type": "number",
      "trait_type": "Generation",
      "value": 1
    }
  ],
  33 : [
    {
      "trait_type": "Pokemon",
      "value": "Mega Evolution"
    },
    {
      "trait_type": "Type",
      "value": ["Bug", "Fighting"]
    },
    {
      "trait_type": "Weaknesses",
      "value": ["Fire", "Psychic", "Flying", "Fairy"]
    },
    {
      "display_type": "number",
      "trait_type": "Generation",
      "value": 2
    }
  ],
  34 : [
    {
      "trait_type": "Pokemon",
      "value": "Mega Evolution"
    },
    {
      "trait_type": "Type",
      "value": ["Water", "Dark"]
    },
    {
      "trait_type": "Weaknesses",
      "value": ["Fairy", "Grass", "Electric", "Fighting", "Bug"]
    },
    {
      "display_type": "number",
      "trait_type": "Generation",
      "value": 1
    }
  ],
  35 : [
    {
      "trait_type": "Pokemon",
      "value": ["Legendary", "Mega Evolution"]
    },
    {
      "trait_type": "Type",
      "value": ["Dragon", "Flying"]
    },
    {
      "trait_type": "Weaknesses",
      "value": ["Fairy", "Dragon", "Rock", "Ice"]
    },
    {
      "display_type": "number",
      "trait_type": "Generation",
      "value": 3
    }
  ],
  36 : [
    {
      "trait_type": "Pokemon",
      "value": "Mega Evolution"
    },
    {
      "trait_type": "Type",
      "value": ["Bug", "Steel"]
    },
    {
      "trait_type": "Weaknesses",
      "value": "Fire"
    },
    {
      "display_type": "number",
      "trait_type": "Generation",
      "value": 2
    }
  ],
  37 : [
    {
      "trait_type": "Pokemon",
      "value": "Normal"
    },
    {
      "trait_type": "Type",
      "value": ["Grass", "Poison"]
    },
    {
      "trait_type": "Weaknesses",
      "value": ["Fire", "Psychic", "Flying", "Ice"]
    },
    {
      "display_type": "number",
      "trait_type": "Generation",
      "value": 1
    }
  ],
  38 : [
    {
      "trait_type": "Pokemon",
      "value": "Mega Evolution"
    },
    {
      "trait_type": "Type",
      "value": ["Rock", "Flying"]
    },
    {
      "trait_type": "Weaknesses",
      "value": ["Steel", "Water", "Electric", "Rock", "Ice"]
    },
    {
      "display_type": "number",
      "trait_type": "Generation",
      "value": 1
    }
  ],
  39 : [
    {
      "trait_type": "Pokemon",
      "value": "Mega Evolution"
    },
    {
      "trait_type": "Type",
      "value": ["Fire", "Fighting"]
    },
    {
      "trait_type": "Weaknesses",
      "value": ["Water", "Psychic", "Flying", "Ground"]
    },
    {
      "display_type": "number",
      "trait_type": "Generation",
      "value": 3
    }
  ],
  40 : [
    {
      "trait_type": "Pokemon",
      "value": "Mega Evolution"
    },
    {
      "trait_type": "Type",
      "value": ["Grass", "Ice"]
    },
    {
      "trait_type": "Weaknesses",
      "value": ["Fire", "Steel", "Flying", "Poison","Fighting", "Rock", "Bug"]
    },
    {
      "display_type": "number",
      "trait_type": "Generation",
      "value": 4
    }
  ],
  41 : [
    {
      "trait_type": "Pokemon",
      "value": "Gigantamax"
    },
    {
      "trait_type": "Type",
      "value":"Normal"
    },
    {
      "trait_type": "Weaknesses",
      "value": "Fighting"
    },
    {
      "display_type": "number",
      "trait_type": "Generation",
      "value": 1
    }
  ],
  42 : [
    {
      "trait_type": "Pokemon",
      "value": "Gigantamax"
    },
    {
      "trait_type": "Type",
      "value": ["Ghost", "Poison"]
    },
    {
      "trait_type": "Weaknesses",
      "value": ["Ghost", "Psychic", "Dark", "Ground"]
    },
    {
      "display_type": "number",
      "trait_type": "Generation",
      "value": 1
    }
  ],
  43 : [
    {
      "trait_type": "Pokemon",
      "value": "Normal"
    },
    {
      "trait_type": "Type",
      "value": ["Electric", "Poison"]
    },
    {
      "trait_type": "Weaknesses",
      "value": ["Psychic", "Ground"]
    },
    {
      "display_type": "number",
      "trait_type": "Generation",
      "value": 8
    }
  ],
  44 : [
    {
      "trait_type": "Pokemon",
      "value": "Normal"
    },
    {
      "trait_type": "Type",
      "value": ["Electric", "Poison"]
    },
    {
      "trait_type": "Weaknesses",
      "value": ["Psychic", "Ground"]
    },
    {
      "display_type": "number",
      "trait_type": "Generation",
      "value": 8
    }
  ],
  45 : [
    {
      "trait_type": "Pokemon",
      "value": "Gigantamax"
    },
    {
      "trait_type": "Type",
      "value": ["Electric", "Poison"]
    },
    {
      "trait_type": "Weaknesses",
      "value": ["Psychic", "Ground"]
    },
    {
      "display_type": "number",
      "trait_type": "Generation",
      "value": 8
    }
  ],
  46 : [
    {
      "trait_type": "Pokemon",
      "value": "Gigantamax"
    },
    {
      "trait_type": "Type",
      "value": "Steel"
    },
    {
      "trait_type": "Weaknesses",
      "value": ["Fire", "Fighting", "Ground"]
    },
    {
      "display_type": "number",
      "trait_type": "Generation",
      "value": 7
    }
  ],
  47 : [
    {
      "trait_type": "Pokemon",
      "value": "Gigantamax"
    },
    {
      "trait_type": "Type",
      "value": "Water"
    },
    {
      "trait_type": "Weaknesses",
      "value": ["Grass", "Electric"]
    },
    {
      "display_type": "number",
      "trait_type": "Generation",
      "value": 8
    }
  ],
  48 : [
    {
      "trait_type": "Pokemon",
      "value": "Legendary"
    },
    {
      "trait_type": "Type",
      "value": ["Dragon", "Electric"]
    },
    {
      "trait_type": "Weaknesses",
      "value": ["Fairy", "Dragon", "Ground", "Ice"]
    },
    {
      "display_type": "number",
      "trait_type": "Generation",
      "value": 5
    }
  ],
  49 : [
    {
      "trait_type": "Pokemon",
      "value": "Normal"
    },
    {
      "trait_type": "Type",
      "value": ["Rock", "Ice"]
    },
    {
      "trait_type": "Weaknesses",
      "value": ["Steel", "Fighting", "Water", "Rock", "Grass", "Ground"]
    },
    {
      "display_type": "number",
      "trait_type": "Generation",
      "value": 6
    }
  ],
  50 : [
    {
      "trait_type": "Pokemon",
      "value": "Normal"
    },
    {
      "trait_type": "Type",
      "value": "Fire"
    },
    {
      "trait_type": "Weaknesses",
      "value": ["Water", "Ground", "Rock"]
    },
    {
      "display_type": "number",
      "trait_type": "Generation",
      "value": 1
    }
  ],
  51 : [
    {
      "trait_type": "Pokemon",
      "value": "Normal"
    },
    {
      "trait_type": "Type",
      "value": ["Fire", "Flying"]
    },
    {
      "trait_type": "Weaknesses",
      "value": ["Water", "Electric", "Rock"]
    },
    {
      "display_type": "number",
      "trait_type": "Generation",
      "value": 1
    }
  ],
  52 : [
    {
      "trait_type": "Pokemon",
      "value": "Mega Evolution"
    },
    {
      "trait_type": "Type",
      "value": ["Grass", "Dragon"]
    },
    {
      "trait_type": "Weaknesses",
      "value": ["Dragon", "Poison", "Flying", "Ice", "Fairy", "Bug"]
    },
    {
      "display_type": "number",
      "trait_type": "Generation",
      "value": 3
    }
  ],
  53 : [
    {
      "trait_type": "Pokemon",
      "value": "Mega Evolution"
    },
    {
      "trait_type": "Type",
      "value": "Dark"
    },
    {
      "trait_type": "Weaknesses",
      "value": ["Fairy", "Bug", "Fighting"]
    },
    {
      "display_type": "number",
      "trait_type": "Generation",
      "value": 3
    }
  ],
  54 : [
    {
      "trait_type": "Pokemon",
      "value": "Mega Evolution"
    },
    {
      "trait_type": "Type",
      "value": ["Dark", "Fire"]
    },
    {
      "trait_type": "Weaknesses",
      "value": ["Water", "Ground", "Fighting", "Rock"]
    },
    {
      "display_type": "number",
      "trait_type": "Generation",
      "value": 2
    }
  ],
  55 : [
    {
      "trait_type": "Pokemon",
      "value": "Mega Evolution"
    },
    {
      "trait_type": "Type",
      "value": ["Grass", "Poison"]
    },
    {
      "trait_type": "Weaknesses",
      "value": ["Fire", "Psychic", "Flying", "Ice"]
    },
    {
      "display_type": "number",
      "trait_type": "Generation",
      "value": 1
    }
  ],
  56 : [
    {
      "trait_type": "Pokemon",
      "value": "Gigantamax"
    },
    {
      "trait_type": "Type",
      "value": ["Grass", "Poison"]
    },
    {
      "trait_type": "Weaknesses",
      "value": ["Fire", "Psychic", "Flying", "Ice"]
    },
    {
      "display_type": "number",
      "trait_type": "Generation",
      "value": 1
    }
  ],
  57 : [
    {
      "trait_type": "Pokemon",
      "value": "Normal"
    },
    {
      "trait_type": "Type",
      "value": ["Grass", "Poison"]
    },
    {
      "trait_type": "Weaknesses",
      "value": ["Fire", "Psychic", "Flying", "Ice"]
    },
    {
      "display_type": "number",
      "trait_type": "Generation",
      "value": 1
    }
  ],
  58 : [
    {
      "trait_type": "Pokemon",
      "value": "Normal"
    },
    {
      "trait_type": "Type",
      "value": "Fire"
    },
    {
      "trait_type": "Weaknesses",
      "value": ["Water", "Ground", "Rock"]
    },
    {
      "display_type": "number",
      "trait_type": "Generation",
      "value": 1
    }
  ],
  59 : [
    {
      "trait_type": "Pokemon",
      "value": "Normal"
    },
    {
      "trait_type": "Type",
      "value": ["Grass", "Poison"]
    },
    {
      "trait_type": "Weaknesses",
      "value": ["Fire", "Psychic", "Flying", "Ice"]
    },
    {
      "display_type": "number",
      "trait_type": "Generation",
      "value": 1
    }
  ],
  60 : [
    {
      "trait_type": "Pokemon",
      "value": "Normal"
    },
    {
      "trait_type": "Type",
      "value":"Normal"
    },
    {
      "trait_type": "Weaknesses",
      "value": "Fighting"
    },
    {
      "display_type": "number",
      "trait_type": "Generation",
      "value": 1
    }
  ],
  61 : [
    {
      "trait_type": "Pokemon",
      "value": "Normal"
    },
    {
      "trait_type": "Type",
      "value": "Grass"
    },
    {
      "trait_type": "Weaknesses",
      "value": ["Fire", "Poison", "Flying", "Ice", "Bug"]
    },
    {
      "display_type": "number",
      "trait_type": "Generation",
      "value": 4
    }
  ],
  62 : [
    {
      "trait_type": "Pokemon",
      "value": "Normal"
    },
    {
      "trait_type": "Type",
      "value": "Dark"
    },
    {
      "trait_type": "Weaknesses",
      "value": ["Fairy", "Bug", "Fighting"]
    },
    {
      "display_type": "number",
      "trait_type": "Generation",
      "value": 2
    }
  ],
  63 : [
    {
      "trait_type": "Pokemon",
      "value": "Mega Evolution"
    },
    {
      "trait_type": "Type",
      "value": ["Normal", "Flying"]
    },
    {
      "trait_type": "Weaknesses",
      "value": ["Electric", "Rock", "Ice"]
    },
    {
      "display_type": "number",
      "trait_type": "Generation",
      "value": 1
    }
  ],
  64 : [
    {
      "trait_type": "Pokemon",
      "value": "Mega Evolution"
    },
    {
      "trait_type": "Type",
      "value": ["Dragon", "Psychic"]
    },
    {
      "trait_type": "Weaknesses",
      "value": ["Ghost", "Dragon", "Ice", "Dark", "Fairy", "Bug"]
    },
    {
      "display_type": "number",
      "trait_type": "Generation",
      "value": 3
    }
  ],
}

for (let i = 0; i < 65; i++) {
  const json = {};
  json.name = "RaptorsNFT #" + i;
  json.description = "RaptorsNFT is a collection of top 64 pokemons. The collection showcases normal, mega evolved and gigantamax pokemons from the pokedex";
  json.price = 0.01;
  json.imageURL = "" + i + ".png";
  json.attributes = listAttributes[i];
  json.background_color = "121212";
  fs.writeFileSync("./artworks/" + i, JSON.stringify(json));
}
