/*
Truthiness #Veracidade
*/

// Teste 05 - Testando a veracidade
test("null", () => {
  const n = null;

  // "toBeNull" corresponde apenas null
  expect(n).toBeNull(); // true

  // "toBeDefined" é o oposto de toBeUndefined
  // expect(n).toBeUndefined(); error: false

  // "toBeUndefined" corresponde apenas undefined
  expect(n).not.toBeUndefined();

  // "toBeTruthy" combina com qualquer coisa que uma declaração (if) trata como verdadeira
  expect(n).not.toBeTruthy();

  // "toBeFalsy" combina com qualquer coisa que uma declaração (if) trata como falsa
  expect(n).toBeFalsy();
});

// Teste 06
test("value to equal 0", () => {
  const value = 0;

  if (value === 0) {
    expect(value).toBeFalsy();
  }
});

// Teste 07
test("zero", () => {
  const z = 0;

  // expect(z).toBeNull(); error: false! "0" is not null
  // expect(z).toBeDefined(); error: false! "0" is not defined
  expect(z).not.toBeUndefined();
  expect(z).not.toBeTruthy(); // "0" is not boolean (true)
  expect(z).toBeFalsy();
});
