const Calculator = require("../src/calculator");

const calc = new Calculator();

// Teste 1 - Soma de dois números utilizando .toBe()
test("Should add two numbers", () => {
  expect(calc.sum(5, 5)).toBe(10);
});

// Teste 2 - Soma de dois números utilizando .toEqual()
test("Should add two numbers", () => {
  expect(calc.sum(5, 5)).toEqual(10);
});

// Teste 3 - Deve gerar um erro caso "b" seja igual à zero
test("Should throw an Error with division by 0", () => {
  expect(() => {
    calc.division(56, 0);
  }).toThrow();
});

// Teste 4 - Deve dividir dois números
test("Should divide two numbers", () => {
  expect(calc.division(20, 4)).toEqual(5);
});
