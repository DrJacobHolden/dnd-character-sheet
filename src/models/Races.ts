import { Race } from "./Race";

export const RACES: Race[] = [
  {
    name: "Dwarf",
    speed: 30,
    ability_bonuses: [
      {
        ability: "CONSTITUTION",
        value: 2
      }
    ],
    // "ability_bonus_options": {},
    alignment:
      "Most dwarves are lawful, believing firmly in the benefits of a well-ordered society. They tend toward good as well, with a strong sense of fair play and a belief that everyone deserves to share in the benefits of a just order.",
    age:
      "Dwarves mature at the same rate as humans, but they're considered young until they reach the age of 50. On average, they live about 350 years.",
    size: "Medium",
    size_description:
      "Dwarves stand between 4 and 5 feet tall and average about 150 pounds. Your size is Medium.",
    starting_proficiencies: [20, 24, 26, 51],
    // "starting_proficiency_options": {
    //   "choose": 1,
    //   "type": "proficiencies",
    //   "from": [71, 59, 68]
    // },
    languages: ["Common", "Dwarvish"],
    language_desc:
      "You can speak, read, and write Common and Dwarvish. Dwarvish is full of hard consonants and guttural sounds, and those characteristics spill over into whatever other language a dwarf might speak.",
    traits: [1, 2, 3]
  }
];
