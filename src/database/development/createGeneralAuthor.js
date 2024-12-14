const { Author } = require('../../models');

const createGeneralAuthor = async () => {
  const data = { id: '00000000-0000-0000-0000-000000000000', author: 'Unknown author' };
  return await Author.findOrCreate({ where: data, defaults: data });
};

module.exports = createGeneralAuthor;
