import { FieldBuilder } from '../field/builder/field-builder';

export class FieldDirector {
  // #region Properties (1)

  private fieldBuilder: FieldBuilder;

  // #endregion Properties (1)

  // #region Public Methods (2)

  public buildFootballField(): void {
    this.fieldBuilder
      .produceAreas()
      .produceCornels()
      .produceGoals()
      .producePenaltyMarks()
      .produceSides()
      .produceStands();
  }

  public buildHandballField(): void {
    this.fieldBuilder
      .produceAreas()
      .produceGoals()
      .producePenaltyMarks()
      .produceSides()
      .produceStands();
      // no corners
  }

  public buildFootballTrainingField(): void {
    this.fieldBuilder
      .produceAreas()
      .produceGoals()
      .producePenaltyMarks()
      .produceSides()
      // no corners
      // no stands
  }

  public setFieldBuilder(fieldBuilder: FieldBuilder): void {
    this.fieldBuilder = fieldBuilder;
  }

  // #endregion Public Methods (2)
}
