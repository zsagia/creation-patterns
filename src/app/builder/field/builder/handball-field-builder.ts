import { FieldBuilder } from './field-builder';
import { HandballField } from './handball/handball-field';

export class HandballFieldBuilder implements FieldBuilder {
  // #region Properties (1)

  private handballField: HandballField;

  // #endregion Properties (1)

  // #region Constructors (1)

  public constructor() {
    this.reset();
  }

  // #endregion Constructors (1)

  // #region Public Methods (7)

  public produceAreas(): FieldBuilder {
    this.handballField.penaltyAreas = '2 x 600';
    this.handballField.freeThrowAreas = '2 x 900';

    return this;
  }

  public produceCornels(): FieldBuilder {
    throw new Error("Method not implemented.");
  }

  public produceGoals(): FieldBuilder {
    this.handballField.goals = '2 x 300 x 208';

    return this;
  }

  public producePenaltyMarks(): FieldBuilder {
    this.handballField.penaltyMarks = '2 x 700';

    return this;
  }

  public produceSides(): FieldBuilder {
    this.handballField.sides = '2 x 50 + 4 x 100';

    return this;
  }

  public produceStands(): FieldBuilder {
    this.handballField.stands = '2 x 50 + 4 x 100';

    return this;
  }

  public reset(): void {
    this.handballField = {};
  }

  public getHandballField(): HandballField {
    return this.handballField;
  }

  // #endregion Public Methods (7)
}
