import { CharacterModifier, MDF } from './character-modifier';
import { Item } from './item.interface';
import { Job } from './job.interface';

export interface Character {
  level: number;
  job: Job;
  items: Item[];
}

export function calculateMdf(chtr: Character): CharacterModifier {
  const levelMdf = MDF.create({
    [chtr.job.mainStat]: 18 + chtr.level * 5,
  });
  const itemMdf = chtr.items.reduce(
    (sum, item) => MDF.add(sum, item.mdf),
    MDF.create(),
  );
  return MDF.add(levelMdf, itemMdf);
}
