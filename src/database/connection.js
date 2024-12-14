const { Sequelize } = require('sequelize');

const db = new Sequelize(
  process.env.DATABASE_URL || {
    dialect: process.env.DB_DIALECT,
    host: process.env.DB_HOST,
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    logging: false,
  }
);

module.exports = db;
