const path = require('path');
const express = require('express');

const app = express();

const dbRouter = require('./routes/db');

const PORT = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

/**
 * handle requests for static files
 */
app.use(express.static(path.resolve(__dirname, '../dist')));

/**
 * define route handlers
 */
app.use('/db', dbRouter);
app.get('/', (req, res) => {
  res.status(200).sendFile(path.resolve(__dirname, '../dist/index.html'));
})

// catch-all route handler for any requests to an unknown route
app.use((req, res) => res.status(404).send('Error: Not Found'));


app.use((err, req, res, next) => {
  const defaultErr = {
    log: 'Express error handler caught unknown middleware error',
    status: 500,
    message: { err: 'An error occurred' },
  };
  const errorObj = Object.assign({}, defaultErr, err);
  console.log(errorObj.log);
  return res.status(errorObj.status).json(errorObj.message);
});

/**
 * start server
 */
app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}...`);
});

module.exports = app;
