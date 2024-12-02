// migrations.config.js
require('dotenv').config();

module.exports = {
  development: {
    username: process.env.DB_MASTER_USERNAME_dev,
    password: process.env.DB_MASTER_PASSWORD_dev,
    database: process.env.DB_NAME,
    host: process.env.DB_HOST,
    dialect: 'postgres',
  },
  test: {
    username: process.env.DB_MASTER_USERNAME_test,
    password: process.env.DB_MASTER_PASSWORD_test,
    database: process.env.DB_NAME,
    host: process.env.DB_HOST,
    dialect: 'postgres',
  },
  production: {
    username: process.env.DB_MASTER_USERNAME_prod,
    password: process.env.DB_MASTER_PASSWORD_prod,
    database: process.env.DB_NAME,
    host: process.env.DB_HOST,
    dialect: 'postgres',
    dialectOptions: {
      ssl: {
          require: true,
          rejectUnauthorized: false
      }
  },
  },
};
