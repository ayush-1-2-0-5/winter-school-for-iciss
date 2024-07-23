require('dotenv').config();
const express = require('express');
const cors = require('cors');
const rootRouter = require('./routes/index');
require('./db/db');
const { app, server } = require('./Socket/socket'); // Import the app and server instance from socket.js

// No need to create a new instance of Express as it's already created in socket.js

app.use(cors());
app.use(express.json());
app.use('/api/v1', rootRouter);

app.get('/', (req, res) => {
  res.send('Hello, World!');
});

const PORT = process.env.PORT || 3001;

if (process.env.NODE_ENV !== 'production') {
  server.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
}

module.exports = app;
module.exports = server; // Export server for vercel
