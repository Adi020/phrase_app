const Author = require('../author/author.model');
const Phrase = require('../phrase/phrase.model');

const initModelsRelations = () => {
  Author.hasMany(Phrase);
  Phrase.belongsTo(Author);
};

module.exports = { initModelsRelations, Author, Phrase };
