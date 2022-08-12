function sum() {
  return Object.values(arguments).reduce(
    (previousValue, currentValue) => previousValue + currentValue,
    0
  );
}

module.exports = sum;
