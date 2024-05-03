const {Sequelize} = require('sequelize')

module.exports = new Sequelize(
    process.env.DB_NAME, // Название БД
    process.env.DB_USER, // Пользователь БД
    process.env.DB_PASSWORD, // Пароль пользователя ДБ
    {
        dialect: 'postgres',
        host: process.env.DB_HOST,
        port: process.env.DB_PORT // Порт ДБ
    }

)