const { esPrimo, contarPrimos, listarPrimos } = require('./primos');

test('el número 5 es primo', () => {
  expect(esPrimo(5)).toBe(true);
});

test('el número 4 no es primo', () => {
  expect(esPrimo(4)).toBe(false);
});

test('el número 13 es primo', () => {
  expect(esPrimo(13)).toBe(true);
});

test('el número 15 no es primo', () => {
  expect(esPrimo(15)).toBe(false);
});

test('cantidad de primos hasta 15 es 6', () => {
  expect(contarPrimos(15)).toBe(6);
});

test('lista de primos hasta 15', () => {
  expect(listarPrimos(15)).toEqual([2, 3, 5, 7, 11, 13]);
});
