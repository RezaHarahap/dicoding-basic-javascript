import { describe, it } from "node:test";
import assert from "node:assert";
import { sum } from "./index.js";

describe("sum function test", () => {
  it("should sum correctly", () => {
    const operandA = 1;
    const operandB = 2;
    const actualValue = sum(operandA, operandB);
    const expectedValue = 3;
    assert.equal(actualValue, expectedValue);
  });
});
