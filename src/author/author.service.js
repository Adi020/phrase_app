const { Author } = require('../models');

class AuthorService {
  static async getAll() {
    const authors = await Author.findAll({ where: { status: 'active' } });
    return authors;
  }
  static async create(author) {
    return await Author.create({ author });
  }
  static async delete(author) {
    return await author.update({ status: 'inactive' });
  }
  static async getById(id) {
    return await Author.findOne({ where: { status: 'active', id } });
  }
  static async update(author, obj) {
    return await author.update(obj);
  }
}

module.exports = AuthorService;
