const app = require('./app'); // Import the Express app

module.exports = (req, res) => {
  return app(req, res); // Use app as a handler for serverless function
};
