const { catchAsync, AppError } = require('../errors');
const phraseSrv = require('../phrase/phrase.service');
const { response } = require('../utils');
const authorSrv = require('./author.service');

const getAll = catchAsync(async (req, res) => {
  const authors = await authorSrv.getAll();
  return response(res, 'successfully obtained authors', { authors });
});

const create = catchAsync(async (req, res, next) => {
  const { author } = req.body;

  const newAuthor = await authorSrv.create(author);
  return response(res, 'successfully created author', { newAuthor }, 201);
});

const remove = catchAsync(async (req, res, next) => {
  const { author } = req;
  await authorSrv.delete(author);
  const noAuthorTable = '00000000-0000-0000-0000-000000000000';
  await phraseSrv.updateAll({ authorId: noAuthorTable }, { authorId: author.id });
  return res.sendStatus(204);
});

const update = catchAsync(async (req, res, next) => {
  const { author: authorToEdit } = req;
  const { author } = req.body;
  const authorUpdated = await authorSrv.update(authorToEdit, { author });

  return response(res, 'successfully update author', { author: authorUpdated });
});

module.exports = {
  getAll,
  create,
  remove,
  update,
};
