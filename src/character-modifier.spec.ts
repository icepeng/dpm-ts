import {
  addArmorIgnore,
  addFinalDamage,
  subArmorIgnore,
  subFinalDamage,
} from './character-modifier';

describe('CharacterModifier', () => {
  describe('addFinalDamage', () => {
    it('should add final damage', () => {
      expect(addFinalDamage(20, 10)).toBe(32);
    });
  });

  describe('subFinalDamage', () => {
    it('should subtract final damage', () => {
      expect(subFinalDamage(32, 10)).toBe(20);
    });
  });

  describe('addArmorIgnore', () => {
    it('should add armor ignore', () => {
      expect(addArmorIgnore(90, 40)).toBe(94);
    });
  });

  describe('subArmorIgnore', () => {
    it('should subtract armor ignore', () => {
      expect(subArmorIgnore(94, 40)).toBe(90);
    });
  });
});
