class Calculator {
  constructor(a, b) {
    (this.a = a), (this.b = b);
  }

  sum(a, b) {
    return a + b;
  }

  division(a, b) {
    if (b === 0) {
      throw new Error("Invalid argument!");
    }

    return a / b;
  }
}

module.exports = Calculator;
