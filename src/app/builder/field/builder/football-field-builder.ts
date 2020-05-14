import { FieldBuilder } from './field-builder';
import { FootballField } from './football/football-field';

export class FootballFieldBuilder implements FieldBuilder {
  // #region Properties (1)

  private footballField: FootballField;

  // #endregion Properties (1)

  // #region Constructors (1)

  public constructor() {
    this.reset();
  }

  // #endregion Constructors (1)

  // #region Public Methods (7)

  public produceAreas(): FieldBuilder {
    this.footballField.penaltyAreas = '2 x 1650';

    return this;
  }

  public produceCornels(): FieldBuilder {
    this.footballField.corners = '4';

    return this;
  }

  public produceGoals(): FieldBuilder {
    this.footballField.goals = '2 x 732 x 244';

    return this;
  }

  public producePenaltyMarks(): FieldBuilder {
    this.footballField.penaltyMarks = '2 x 1100';

    return this;
  }

  public produceSides(): FieldBuilder {
    this.footballField.sides = '7000 x 11000';

    return this;
  }

  public produceStands(): FieldBuilder {
    this.footballField.stands = '2 x 50 + 4 x 100';

    return this;
  }

  public reset(): void {
    this.footballField = {};
  }

  public getFootballField(): FootballField {
    return this.footballField;
  }

  // #endregion Public Methods (7)
}
