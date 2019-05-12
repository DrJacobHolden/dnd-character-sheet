import { RACES } from "./Races";
import { PROFICIENCIES } from "./Proficiencies";

export enum Abilities {
  STRENGTH,
  DEXTERITY,
  CONSTITUTION,
  INTELLIGENCE,
  WISDOM,
  CHARISMA
}

export type AbilityMod = {
  ability: keyof typeof Abilities;
  value: number;
  optional?: boolean;
};

export enum Skills {
  ACROBATICS,
  ANIMAL_HANDLING,
  ARCANA,
  ATHLETICS,
  DECEPTION,
  HISTORY,
  INVESTIGATION,
  INSIGHT,
  INTIMIDATION,
  MEDICINE,
  NATURE,
  PERCEPTION,
  PERFORMANCE,
  PERSUASION,
  RELIGION,
  SLEIGHT_OF_HAND,
  SURVIVAL,
  STEALTH
}

export enum ProficiencyTypes {
  ARMOR,
  ARTISAN_TOOL,
  GAMING_SET,
  MUSICAL_INSTRUMENT,
  OTHER,
  SAVING_THROW,
  SKILL,
  VEHICLE,
  WEAPON
}

export interface Proficiency {
  index: number; // TODO: remove
  type: keyof typeof ProficiencyTypes;
  name?: string;
  skill?: keyof typeof Skills;
  ability?: keyof typeof Abilities;
}

export type Speed = {
  walking: number;
  climbing?: number;
  swimming?: number;
  flying?: number;
  jumping?: number;
};

// Deep merge, except overwrite ability bonuses
export interface Race {
  [key: string]: any;
  name: string;
  speed: Speed | number;
  ability_bonuses?: AbilityMod[];
  alignment: string;
  age: string;
  size: "Large" | "Medium" | "Small" | "Tiny";
  size_description: string;
  starting_proficiencies: number[];
  languages: string[];
  language_desc: string;
  traits?: number[]; // TODO:
  feats?: never; // TODO:
  race?: Race;
  subraces?: Race[];
  subraceOptional?: boolean;
}

export function getProficiencyByIndex(index: number): Proficiency {
  return PROFICIENCIES[index];
}

export function getRaceByName(name: string) {
  return RACES.filter(race => race.name === name)[0];
}
