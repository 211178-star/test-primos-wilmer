const { validarLogin } = require('./login');

describe('Ejercicio 2: Login', () => {

  test('login correcto con credenciales válidas', () => {
    expect(validarLogin('admin', '1234')).toBe('Login correcto');
  });

  test('login falla con contraseña incorrecta', () => {
    expect(validarLogin('admin', '0000')).toBe('Credenciales incorrectas');
  });

  test('login falla con usuario incorrecto', () => {
    expect(validarLogin('user', '1234')).toBe('Credenciales incorrectas');
  });

  test('login falla si usuario está vacío', () => {
    expect(validarLogin('', '1234')).toBe('Campos vacíos');
  });

  test('login falla si contraseña está vacía', () => {
    expect(validarLogin('admin', '')).toBe('Campos vacíos');
  });

});
