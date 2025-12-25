const { esPrimo, contarPrimos, listarPrimos } = require('./primos');

test('2 es primos', () => {
  expect(esPrimo(2)).toBe(true);
});

test('1 no es primos', () => {
  expect(esPrimo(1)).toBe(false);
});

test('7 es primos', () => {
  expect(esPrimo(7)).toBe(true);
});

test('10 no es primos', () => {
  expect(esPrimo(10)).toBe(false);
});

test('contar primos hasta 10 debe dar 4', () => {
  expect(contarPrimos(10)).toBe(4);
});

test('listar primos hasta 10', () => {
  expect(listarPrimos(10)).toEqual([2, 3, 5, 7]);
});