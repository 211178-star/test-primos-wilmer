function esPrimo(valor) {
  if (valor <= 1) return false;
  if (valor === 2) return true;
  if (valor % 2 === 0) return false;

  for (let divisor = 3; divisor <= Math.sqrt(valor); divisor += 2) {
    if (valor % divisor === 0) return false;
  }
  return true;
}

function contarPrimos(limiteMax) {
  let total = 0;
  for (let numero = 2; numero <= limiteMax; numero++) {
    if (esPrimo(numero)) total++;
  }
  return total;
}

function listarPrimos(limiteMax) {
  const resultado = [];
  for (let numero = 2; numero <= limiteMax; numero++) {
    if (esPrimo(numero)) resultado.push(numero);
  }
  return resultado;
}

module.exports = {
  esPrimo,
  contarPrimos,
  listarPrimos
};
