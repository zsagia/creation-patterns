import { FootballMatch } from '../match/football-match';
import { Match } from '../match/match';
import { Category } from './category';

export class FootballCategory extends Category {
  public createMatch(team1: string, team2: string, dateTime: number): Match {
    return new FootballMatch('Football', team1, team2, dateTime);
  }
}
