require('dotenv').config();

module.exports = {
    appSecret: process.env.APP_SECRET,
    dbUsername: process.env.DB_USERNAME,
    dbPassword: process.env.DB_PASSWORD,
    dbDatabase: process.env.DB_DATABASE,
    dbHost: process.env.DB_HOST,
    dbDialect: process.env.DB_DIALECT,
}