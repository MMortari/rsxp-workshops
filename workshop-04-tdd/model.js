const users = [
  {
    name: 'Matheus Mortari',
    email: 'matheus@email.com'
  }
]

module.exports = {
  insert: (user) => {
    console.log('Conectando no banco de dados')
    users.push(user);
    return users;
  }
};