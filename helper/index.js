const CustomError = require('./Error');
const middlewares = require('./middlewares');

module.exports = {
  CustomError,
  ...middlewares,
};
