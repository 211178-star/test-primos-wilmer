function validarLogin(usuario, password) {
  const usuarioValido = 'admin';
  const passwordValido = '1234';

  if (!usuario || !password) {
    return 'Campos vacíos';
  }

  if (usuario === usuarioValido && password === passwordValido) {
    return 'Login correcto';
  }

  return 'Credenciales incorrectas';
}

module.exports = { validarLogin };
