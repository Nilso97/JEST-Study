const sum = require("../src/sum");

// Test 01 - Testando o resultado da soma dos valores "../src/sum"
test("adds 1 + 2 to equal 3", () => {
  expect(sum(1, 2)).toBe(3);
});

// Test 02 - Testando a soma de valores numéricos
test("two plus two is four", () => {
  expect(2 + 2).toBe(4);
});
