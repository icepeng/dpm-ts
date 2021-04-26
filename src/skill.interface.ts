import { CharacterModifier } from './character-modifier';

export interface IDamageSkill {
  delay: number;
  damage: number;
  activation: number;
  hit: number;
  cooltime?: number;
  cooltimeReduce: boolean;
  modifier?: CharacterModifier;
  cancelable?: { skill: string; cancelableTime: number }[];
  onAction?: any[];
  onActivation?: any[];
}

function makeSkill(data: any) {
}