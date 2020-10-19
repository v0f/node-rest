const { createLogger, format, transports } = require('winston');
const morgan = require('morgan');
const path = require('path');

const logfile_path = path.resolve(__dirname, '../../logs/log.log');

const logger = createLogger({
  format: format.combine(format.colorize(), format.cli()),
  transports: [
    new transports.Console(),
    new transports.File({
      filename: logfile_path,
      format: format.combine(format.uncolorize(), format.json()),
      maxsize: 3000000,
      maxFiles: 1
    })
  ],
  exitOnError: false
});

const errHandler = (error, req, res) => {
  logger.log('error', '500: Internal server error.');
  res.status(500).send('Internal server error');
};

process.on('uncaughtException', error => {
  logger.error(`uncaughtException: ${error.stack}`);
});

process.on('unhandledRejection', reason => {
  logger.error(`unhandledRejection: ${reason.message}`);
});

module.exports = { requestLogger, errHandler, logger };
