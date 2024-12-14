const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const router = require('./routes');
const { xss } = require('express-xss-sanitizer');

const globalErrorHandler = require('./errors/globalErrorHandler');
const { createGeneralAuthor } = require('./database/development');
const { AppError } = require('./errors');

const app = express();

if (process.env.NODE_ENV === 'development') {
  createGeneralAuthor();
}

app.use(express.json({ limit: '4kb' }));
app.use(cors());
app.use(helmet());
app.use(helmet());
app.use(xss());

app.use('/api/v1', router);
app.use('*', (req, res, next) => {
  return next(new AppError(`can't fine ${req.originalUrl} on this server`, 404));
});

app.use(globalErrorHandler);

module.exports = app;
