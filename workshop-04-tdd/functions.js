const functions = {
  soma: (num1, num2) => {
    return num1 + num2;
  },
  divide: (dividendo, divisor) => {
    if(divisor == 0) throw new Error('Divisão por zero não é válida')
    return dividendo / divisor;
  }
}

module.exports = functions;