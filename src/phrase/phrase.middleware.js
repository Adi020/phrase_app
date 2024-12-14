const { catchAsync, AppError } = require('../errors');
const PhrasesSrv = require('./phrase.service');

const validPhrase = catchAsync(async (req, res, next) => {
  const { id } = req.params;

  const phrase = await PhrasesSrv.getById({ id, status: 'active' });
  if (!phrase) return next(new AppError('phrase not found', 404));

  req.phrase = phrase;
  next();
});

module.exports = { validPhrase };
