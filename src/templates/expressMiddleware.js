const myMiddleware = (req, res, next) => {
  console.log("Middleware is working");
  next();
};

module.exports = myMiddleware;
