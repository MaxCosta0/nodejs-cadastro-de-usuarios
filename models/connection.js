const Sequelize = require('sequelize');

const sequelize = new Sequelize('cadastro', 'root', 'XXX', {
    host: 'localhost',
    dialect: 'mysql'
});

module.exports = {
    Sequelize: Sequelize,
    sequelize: sequelize
}