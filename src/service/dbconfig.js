require('dotenv').config();

const config = {
    user: process.env.DATABASE_USERNAME_LOGIN,
    password: process.env.DATABASE_PASSWORD_LOGIN,
    server: process.env.DATABASE_SERVER_NAME,
    database: process.env.DATABASE_DB_NAME,
    options: {
        trustedconnection: true,
        enableArithAbort: true,
        instancename: 'SQLEXPRESS'
    }
}
module.exports = config;


