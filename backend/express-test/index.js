const app = require('./app');

module.exports = (req, res) => {
  app(req, res); // Use app as a handler for serverless function
};
