export interface CharacterModifier {
  str: number;
  strRate: number;
  strFixed: number;
  dex: number;
  dexRate: number;
  dexFixed: number;
  int: number;
  intRate: number;
  intFixed: number;
  luk: number;
  lukRate: number;
  lukFixed: number;
  maxHP: number;
  maxHPRate: number;
  maxHPFixed: number;
  att: number;
  attRate: number;
  matt: number;
  mattRate: number;
  crit: number;
  critDamage: number;
  pdamage: number;
  finalDamage: number;
  armorIgnore: number;
  propIgnore: number;
  passiveLevel: number;
  reuseRate: number;
  cooltimeReduce: number;
  cooltimeReduceRate: number;
  additionalTarget: number;
  buffRemain: number;
  summonRemain: number;
}

export function addFinalDamage(a: number, b: number): number {
  return a + b + a * b * 0.01;
}

export function subFinalDamage(a: number, b: number): number {
  return ((100 + a) / (100 + b)) * 100 - 100;
}

export function addArmorIgnore(a: number, b: number): number {
  return 100 - 0.01 * ((100 - a) * (100 - b));
}

export function subArmorIgnore(a: number, b: number): number {
  return 100 - (100 * (100 - a)) / (100 - b);
}

function createMdf(mdf: Partial<CharacterModifier> = {}): CharacterModifier {
  return {
    str: 0,
    strRate: 0,
    strFixed: 0,
    dex: 0,
    dexRate: 0,
    dexFixed: 0,
    int: 0,
    intRate: 0,
    intFixed: 0,
    luk: 0,
    lukRate: 0,
    lukFixed: 0,
    maxHP: 0,
    maxHPRate: 0,
    maxHPFixed: 0,
    att: 0,
    attRate: 0,
    matt: 0,
    mattRate: 0,
    crit: 0,
    critDamage: 0,
    pdamage: 0,
    finalDamage: 100,
    armorIgnore: 0,
    propIgnore: 0,
    passiveLevel: 0,
    reuseRate: 0,
    cooltimeReduce: 0,
    cooltimeReduceRate: 0,
    additionalTarget: 0,
    buffRemain: 0,
    summonRemain: 0,
    ...mdf,
  };
}

function addMdf(a: CharacterModifier, b: CharacterModifier): CharacterModifier {
  return {
    str: a.str + b.str,
    strRate: a.strRate + b.strRate,
    strFixed: a.strFixed + b.strFixed,
    dex: a.dex + b.dex,
    dexRate: a.dexRate + b.dexRate,
    dexFixed: a.dexFixed + b.dexFixed,
    int: a.int + b.int,
    intRate: a.intRate + b.intRate,
    intFixed: a.intFixed + b.intFixed,
    luk: a.luk + b.luk,
    lukRate: a.lukRate + b.lukRate,
    lukFixed: a.lukFixed + b.lukFixed,
    maxHP: a.maxHP + b.maxHP,
    maxHPRate: a.maxHPRate + b.maxHPRate,
    maxHPFixed: a.maxHPFixed + b.maxHPFixed,
    att: a.att + b.att,
    attRate: a.attRate + b.attRate,
    matt: a.matt + b.matt,
    mattRate: a.mattRate + b.mattRate,
    crit: a.crit + b.crit,
    critDamage: a.critDamage + b.critDamage,
    pdamage: a.pdamage + b.pdamage,
    finalDamage: addFinalDamage(a.finalDamage, b.finalDamage),
    armorIgnore: addArmorIgnore(a.armorIgnore, b.armorIgnore),
    propIgnore: a.propIgnore + b.propIgnore,
    passiveLevel: a.passiveLevel + b.passiveLevel,
    reuseRate: a.reuseRate + b.reuseRate,
    cooltimeReduce: a.cooltimeReduce + b.cooltimeReduce,
    cooltimeReduceRate: a.cooltimeReduceRate + b.cooltimeReduceRate,
    additionalTarget: a.additionalTarget + b.additionalTarget,
    buffRemain: a.buffRemain + b.buffRemain,
    summonRemain: a.summonRemain + b.summonRemain,
  };
}

function subMDF(a: CharacterModifier, b: CharacterModifier): CharacterModifier {
  return {
    str: a.str - b.str,
    strRate: a.strRate - b.strRate,
    strFixed: a.strFixed - b.strFixed,
    dex: a.dex - b.dex,
    dexRate: a.dexRate - b.dexRate,
    dexFixed: a.dexFixed - b.dexFixed,
    int: a.int - b.int,
    intRate: a.intRate - b.intRate,
    intFixed: a.intFixed - b.intFixed,
    luk: a.luk - b.luk,
    lukRate: a.lukRate - b.lukRate,
    lukFixed: a.lukFixed - b.lukFixed,
    maxHP: a.maxHP - b.maxHP,
    maxHPRate: a.maxHPRate - b.maxHPRate,
    maxHPFixed: a.maxHPFixed - b.maxHPFixed,
    att: a.att - b.att,
    attRate: a.attRate - b.attRate,
    matt: a.matt - b.matt,
    mattRate: a.mattRate - b.mattRate,
    crit: a.crit - b.crit,
    critDamage: a.critDamage - b.critDamage,
    pdamage: a.pdamage - b.pdamage,
    finalDamage: subFinalDamage(a.finalDamage, b.finalDamage),
    armorIgnore: subArmorIgnore(a.armorIgnore, b.armorIgnore),
    propIgnore: a.propIgnore - b.propIgnore,
    passiveLevel: a.passiveLevel - b.passiveLevel,
    reuseRate: a.reuseRate - b.reuseRate,
    cooltimeReduce: a.cooltimeReduce - b.cooltimeReduce,
    cooltimeReduceRate: a.cooltimeReduceRate - b.cooltimeReduceRate,
    additionalTarget: a.additionalTarget - b.additionalTarget,
    buffRemain: a.buffRemain - b.buffRemain,
    summonRemain: a.summonRemain - b.summonRemain,
  };
}

export const MDF = {
  create: createMdf,
  add: addMdf,
  sub: subMDF,
};
