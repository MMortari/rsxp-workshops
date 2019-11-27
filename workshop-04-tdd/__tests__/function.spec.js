const functions = require('../functions');

// Funções de teste unitário
describe('Funções', () => {
  it('soma de 2 + 8 deve ser igual a 10', () => {
    expect(functions.soma(2, 8)).toBe(10);
  })

  it('divide 10 por 2 e deve retornar 5', () => {
    expect(functions.divide(10, 2)).toBe(5);
  })

  it('divisão por 0 retorne um erro', () => {
    try {
      // Essa função espera um erro
      expect(functions.divide(10, 0));
      fail(); // força o retorno de um erro
    } catch(err) {
      expect(err.message).toBe('Divisão por zero não é válida')
    }
  })
})