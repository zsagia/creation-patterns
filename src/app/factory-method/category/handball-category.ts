import { HandballMatch } from '../match/handball-match';
import { Match } from '../match/match';
import { Category } from './category';

export class HandballCategory extends Category {
  public createMatch(team1: string, team2: string, dateTime: number): Match {
    return new HandballMatch(team1, team2, dateTime);
  }
}
