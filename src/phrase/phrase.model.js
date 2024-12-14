const { DataTypes } = require('sequelize');
const db = require('../database/connection');

const Phrase = db.define('phrase', {
  id: {
    primaryKey: true,
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    allowNull: false,
  },
  phrase: {
    type: DataTypes.TEXT,
    allowNull: false,
    unique: true,
  },
  status: {
    type: DataTypes.ENUM(['active', 'inactive']),
    allowNull: false,
    defaultValue: 'active',
  },
});

module.exports = Phrase;
