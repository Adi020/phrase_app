const { where } = require('sequelize');
const db = require('../database/connection');
const { AppError } = require('../errors');
const { Phrase, Author } = require('../models');

class PhrasesService {
  static async getCount() {
    return await Phrase.count({ where: { status: 'active' } });
  }
  static async getAll(filters) {
    const phrasesCount = await this.getCount();
    if (!phrasesCount) return [];

    const { limit = phrasesCount, page = 1 } = filters;

    const offset = (page - 1) * limit;
    if (offset >= phrasesCount) throw new AppError('page not found', 404);

    const phrases = await Phrase.findAll({
      where: { status: 'active' },
      include: [{ model: Author, attributes: ['id', 'author'] }],
      attributes: ['id', 'phrase'],
      limit,
      offset,
    });

    const pages = Math.ceil(phrasesCount / limit);

    return { phrases, pages, currentPage: page };
  }
  static async create(obj) {
    return await Phrase.create(obj);
  }
  static async delete(phrase) {
    return await phrase.update({ status: 'inactive' });
  }
  static async getById(id) {
    return await Phrase.findOne({ where: { status: 'active', id } });
  }
  static async update(phrase, obj) {
    return phrase.update(obj);
  }
  static async updateAll(obj, whereConditions) {
    return await Phrase.update(obj, { where: whereConditions });
  }
}

module.exports = PhrasesService;
