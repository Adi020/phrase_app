const { catchAsync, AppError } = require('../errors');
const AuthorSrv = require('./author.service');

const validAuthor = catchAsync(async (req, res, next) => {
  const { id } = req.params;

  const author = await AuthorSrv.getById({ id, status: 'active' });
  if (!author) return next(new AppError('author not found', 404));

  req.author = author;
  next();
});

module.exports = {
  validAuthor,
};
