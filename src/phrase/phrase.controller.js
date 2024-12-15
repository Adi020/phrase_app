const { catchAsync, AppError } = require('../errors');
const { response } = require('../utils');
const PhrasesSrv = require('./phrase.service');

const getAll = catchAsync(async (req, res, next) => {
  const { limit, page } = req.query;
  const phrases = await PhrasesSrv.getAll({ limit, page });

  return response(res, 'successfully obtained phrases', phrases);
});

const create = catchAsync(async (req, res, next) => {
  const { phrase, authorId } = req.body;
  const newPhrase = await PhrasesSrv.create({ phrase, authorId });
  return response(res, 'successfully created phrase', { newPhrase }, 201);
});

const remove = catchAsync(async (req, res, next) => {
  const { phrase } = req;
  PhrasesSrv.delete(phrase);
  return res.sendStatus(204);
});

const update = catchAsync(async (req, res, next) => {
  const { phrase: phraseToEdit } = req;
  const { phrase, authorId } = req.body;

  const phraseUpdated = await PhrasesSrv.update(phraseToEdit, { phrase, authorId });
  return response(res, 'successfully update phrase', { phrase: phraseUpdated });
});

module.exports = {
  getAll,
  create,
  remove,
  update,
};
