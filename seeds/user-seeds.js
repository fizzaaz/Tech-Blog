const { User } = require('../models');

const userData = [{
        username: 'Fizza',
        password: '12345'

    },
    {
        username: 'Yousha',
        password: '12345'
    },
    {
        username: 'Dua',
        password: 'abcd'
    }
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;