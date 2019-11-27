const userService = require('../userService');
const db = require('../model');

describe('userService', () => {
  it('userCreate deve retornar array contendo informações da pessoa adicionada', () => {
    const user = {
      name: 'Camila',
      email: 'camila@bossabox.com'
    }

    const response = [
      {
        name: "Matheus Mortari",
        email: 'matheus@email.com'
      }, 
      user
    ];

    db.insert = jest.fn((user) => response);

    const userServices = userService.createUser(user);

    // Para comparar objetos deve-se usar toEqual
    expect(userServices).toEqual(response);
    
    expect(db.insert).toHaveBeenCalledWith(user);
  })
})