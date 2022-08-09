/*
Strings
*/

// Teste 09 - Strings with Regex
test("there is no I in team", () => {
  expect("team").not.toMatch(/I/);
});

// Teste 10
test('but there is a "stop" in Christoph', () => {
  expect("Christoph").toMatch(/stop/);
});
