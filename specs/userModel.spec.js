const users = require('./../api/models/users');

describe('User Model', () => {
    it('New User', () => {
      const user = {"username":"username", "password":"password"};
      users.newUser(user);
      expect(users.arrayLenght()).toEqual(1);
    });
  });