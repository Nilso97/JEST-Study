/*
Automated tests using TDD (Test Driven Development)

Obs: Tests without JEST
*/

const sum = require("../src/index");

const expect = (result) => ({
  toBe: (expected) => {
    if (result === expected) {
      console.log("\x1b[32m", "Passed the test!");
    } else {
      console.log("\x1b[31m", "Did not pass the test!");
    }
  },

  notToBe: (expected) => {
    if (result !== expected) {
      console.log("\x1b[32m", "Passed the test!");
    } else {
      console.log("\x1b[31m", "Did not pass the test!");
    }
  },
});

function it(description, callback) {
  console.log("---", description);
  callback();
}

// Test 01
it("Should sum 10 with 20", () => {
  /*
  const n1 = 10;
  const n2 = 20;
  const result = sum(n1, n2);
  const expected = 30;

  expect(result).toBe(expected);
  */

  expect(sum(10, 20)).toBe(30);
});

// Test 02
it("Should sum two values and return an error", () => {
  expect(sum(30, 40)).notToBe(70);
});

// Test 03
it("Should sum three values", () => {
  expect(sum(10, 10, 10)).toBe(30);
});
