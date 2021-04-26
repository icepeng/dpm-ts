import { CharacterModifier } from './character-modifier';

export type Stat = 'str' | 'dex' | 'int' | 'luk';

export interface Job {
  mainStat: Stat;
  getStatFactor: (mdf: CharacterModifier) => number;
  getAttFactor: (mdf: CharacterModifier) => number;
}
