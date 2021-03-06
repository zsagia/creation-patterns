import { Match } from './match';

export class HandballMatch implements Match {
  public constructor(
    public category: string,
    public team1: string,
    public team2: string,
    public dateTime: number,
    public result?: string
  ) {}
}
