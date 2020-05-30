const bcrypt = require('bcryptjs');

const users = [];

const newUser = (user) => {
    users.push(user);
};

const getUser = (id) => {
    return users[id].username;
};

const getUsers = () => {
    return users;
};

const findUser = (username, password) => {
    return !!users.find(user => 
        user.username === username && 
        bcrypt.compareSync(password, user.password)
    )
};

const arrayLenght = ()=> {
    return users.length;
};

module.exports = { newUser, getUser, getUsers, findUser, arrayLenght};