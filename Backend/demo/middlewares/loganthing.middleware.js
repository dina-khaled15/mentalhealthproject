
module.exports = function (req, res, next) {
    console.log('LOGING MIDDLEWARE');
    const x = new Error('this is custom error from logging middleware error');
    next(x);
};