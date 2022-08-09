const shoppingList = require("../src/arrays_iterables");

/*
Arrays and Iterables #Iteráveis
*/

// Teste 11 - A lista de compras contém leite
test("the shopping list has milk on it", () => {
  expect(shoppingList).toContain("milk");
  expect(new Set(shoppingList)).toContain("milk");
});
