/*
Numbers #Números
*/

// Teste 08 - Comparando números
test("two plus two", () => {
  const value = 2 + 2;

  expect(value).toBeGreaterThan(3);
  expect(value).toBeGreaterThanOrEqual(3);
  expect(value).toBeLessThan(5);
  expect(value).toBeLessThanOrEqual(4.5);
});

// Para igualdade de ponto flutuante, use toBeCloseToao invés de toEqual, porque você não quer que um teste dependa de um pequeno erro de arredondamento.
test("adding floating point numbers", () => {
  const value = 0.1 + 0.2;

  // expect(value).toBe(0.3) - This won't work because of rounding error
  expect(value).toBeCloseTo(0.3); // This works.
});
