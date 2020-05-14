import { Component, OnInit } from '@angular/core';

import { FieldDirector } from './director/field-director';
import { FootballFieldBuilder } from './field/builder/football-field-builder';
import { FootballField } from './field/builder/football/football-field';
import { HandballFieldBuilder } from './field/builder/handball-field-builder';
import { HandballField } from './field/builder/handball/handball-field';


@Component({
  selector: 'app-builder',
  templateUrl: './builder.component.html',
  styleUrls: ['./builder.component.scss']
})
export class BuilderComponent implements OnInit {
  // #region Properties (4)

  private fieldDirector: FieldDirector;

  public footballField: FootballField;
  public footballTrainingField: FootballField;
  public handballField: HandballField;

  // #endregion Properties (4)

  // #region Constructors (1)

  public constructor() {
    this.fieldDirector = new FieldDirector();
  }

  // #endregion Constructors (1)

  // #region Public Methods (1)

  public ngOnInit(): void {
    // build football field
    let footballFieldBuilder = new FootballFieldBuilder();

    this.fieldDirector.setFieldBuilder(footballFieldBuilder);
    this.fieldDirector.buildFootballField();

    this.footballField = footballFieldBuilder.getFootballField();

    // build handball field
    const handballFieldBuilder = new HandballFieldBuilder();

    this.fieldDirector.setFieldBuilder(handballFieldBuilder);
    this.fieldDirector.buildHandballField();

    this.handballField = handballFieldBuilder.getHandballField();

    // build football training field
    footballFieldBuilder = new FootballFieldBuilder();

    this.fieldDirector.setFieldBuilder(footballFieldBuilder);
    this.fieldDirector.buildFootballTrainingField();

    this.footballTrainingField = footballFieldBuilder.getFootballField();
  }

  // #endregion Public Methods (1)
}
