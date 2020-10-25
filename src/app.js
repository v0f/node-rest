const express = require('express');
const swaggerUI = require('swagger-ui-express');
const path = require('path');
const YAML = require('yamljs');
const userRouter = require('./resources/users/user.router');
const boardRouter = require('./resources/boards/board.router');
const taskRouter = require('./resources/tasks/task.router');
const { requestLogger, logger } = require('./common/logger');

const app = express();
const swaggerDocument = YAML.load(path.join(__dirname, '../doc/api.yaml'));

app.use(express.json());

app.use('/doc', swaggerUI.serve, swaggerUI.setup(swaggerDocument));

app.use(requestLogger);

app.use('/', (req, res, next) => {
  if (req.originalUrl === '/') {
    res.send('Service is running!');
    return;
  }
  next();
});

app.use('/users', userRouter);
app.use('/boards', boardRouter);
boardRouter.use('/:boardId/tasks', taskRouter);

// error handlers
app.use((error, req, res, next) => {
  logger.error(`500: Internal server error.${error.message}`);
  res.status(500).send('Internal server error');
  next();
});

// process.on('uncaughtException', error => {
//   logger.error(`uncaughtException: ${error.message}`);
// });

// process.on('unhandledRejection', reason => {
//   logger.error(`unhandledRejection: ${reason.message}`);
// });

// ********** uncomment for cross-check **********
// uncaughtException
// throw Error('Oops!');
// unhandledRejection
// Promise.reject(Error('Oops!'));

module.exports = app;
