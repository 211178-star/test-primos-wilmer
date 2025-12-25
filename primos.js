function esPrimo(valor) {
  if (valor < 2) return false;

  let esValido = true;
  let divisor = 2;

  while (divisor < valor && esValido) {
    if (valor % divisor === 0) {
      esValido = false;
    }
    divisor++;
  }

  return esValido;
}

function contarPrimos(limite) {
  return Array.from({ length: limite + 1 }, (_, i) => i)
    .filter(n => esPrimo(n))
    .length;
}

function listarPrimos(limite) {
  return Array.from({ length: limite + 1 }, (_, i) => i)
    .filter(n => esPrimo(n));
}

module.exports = {
  esPrimo,
  contarPrimos,
  listarPrimos
};
