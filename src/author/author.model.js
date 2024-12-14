const { DataTypes } = require('sequelize');
const db = require('../database/connection');

const Author = db.define('author', {
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true,
    allowNull: false,
  },
  author: {
    type: DataTypes.TEXT,
    allowNull: false,
    unique: true,
  },
  status: {
    type: DataTypes.ENUM(['active', 'inactive']),
    defaultValue: 'active',
    allowNull: false,
  },
});

module.exports = Author;
