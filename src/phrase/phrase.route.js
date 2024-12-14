const { Router } = require('express');
const { create, getAll, remove, update } = require('./phrase.controller');
const { validPhrase } = require('./phrase.middleware');

const phraseRouter = Router();

phraseRouter.route('/').get(getAll).post(create);
phraseRouter.route('/:id').delete(validPhrase, remove).patch(validPhrase, update);

module.exports = phraseRouter;
