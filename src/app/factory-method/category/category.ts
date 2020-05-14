import { Match } from '../match/match';

export abstract class Category {
  public name: string;
  public rules: string[];

  public constructor() {}

  public abstract createMatch(
    team1: string,
    team2: string,
    dateTime: number
  ): Match;
}
