const express = require('express');
const cors = require('cors');
const { server, app } = require('./Socket/socket'); 
const rootRouter = require('./routes/index'); 

app.use(cors());
app.use(express.json());
app.use('/api/v1', rootRouter);

app.get('/', (req, res) => {
  res.send('Hello, World!');
});

const PORT = process.env.PORT || 3001;
server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

module.exports = app;
