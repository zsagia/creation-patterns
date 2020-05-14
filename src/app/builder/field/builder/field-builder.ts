export interface FieldBuilder {
  produceGoals(): FieldBuilder;
  produceAreas(): FieldBuilder;
  producePenaltyMarks(): FieldBuilder;
  produceSides(): FieldBuilder;
  produceStands(): FieldBuilder;
  produceCornels(): FieldBuilder;
  reset(): void;
}
