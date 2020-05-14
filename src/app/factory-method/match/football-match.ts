import { Match } from './match';

export class FootballMatch implements Match {
  public constructor(
    public team1: string,
    public team2: string,
    public dateTime: number,
    public result?: string
  ) {}
}
