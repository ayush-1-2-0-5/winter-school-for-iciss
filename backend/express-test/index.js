const { app, server } = require('./app'); // Import the Express app and server

module.exports = (req, res) => {
  return app(req, res); // Use app as a handler for serverless function
};
