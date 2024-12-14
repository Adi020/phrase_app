const response = (res, message, obj = {}, statusCode = 200) => {
  responseProps = { status: 'success', message };
  Object.assign(obj, responseProps);
  res.status(statusCode).json(obj);
};

module.exports = response;
