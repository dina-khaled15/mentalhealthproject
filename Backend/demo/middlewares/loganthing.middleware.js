const loggingMiddleware = (req, res, next) => {
  console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
  next();
};

module.exports = loggingMiddleware;

module.exports = function (req, res, next) {
  console.log('LOGING MIDDLEWARE');
  const x = new Error('this is custom error from logging middleware error');
  next(x);
};

