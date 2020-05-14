import { Component, OnInit } from '@angular/core';
import { Match } from './match/match';
import { Category } from './category/category';
import { FootballCategory } from './category/football-category';
import { HandballCategory } from './category/handball-category';

@Component({
  selector: 'app-factory-method',
  templateUrl: './factory-method.component.html',
  styleUrls: ['./factory-method.component.scss']
})
export class FactoryMethodComponent implements OnInit {
  public matches: Match[];

  public constructor() {
    this.matches = [];
  }

  public ngOnInit(): void {
    const footballCategory: Category = new FootballCategory();

    const handballCategory: Category = new HandballCategory();

    this.matches.push(footballCategory.createMatch('Ferencvarosi TC', 'MOL Fehervar FC', Date.now()));
    this.matches.push(handballCategory.createMatch('Gyori Audi ETO KC', 'Siofok KTC KC', Date.now()));
  }

}
