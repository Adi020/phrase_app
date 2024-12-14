const { Router } = require('express');
const { getAll, create, remove, update } = require('./author.controller');
const { validAuthor } = require('./author.middleware');

const authorRouter = Router();

authorRouter.route('/').get(getAll).post(create);
authorRouter.route('/:id').delete(validAuthor, remove).patch(validAuthor, update);

module.exports = authorRouter;
