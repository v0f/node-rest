const winston = require('winston');
const morgan = require('morgan');
const path = require('path');

winston.configure({
  format: winston.format.combine(
    winston.format.timestamp({ format: 'DD-MM-YYYY HH:mm:ss' }),
    winston.format.printf(
      log => `[${log.timestamp}] ${log.level}: ${log.message}`
    )
  ),
  transports: [
    new winston.transports.Console(),
    new winston.transports.File({
      filename: path.resolve(__dirname, '../../logs/log.log')
    })
  ],
  exitOnError: false
});

const requestLogger = morgan(
  (tokens, req) => {
    const query = JSON.stringify(req.query);
    const body = JSON.stringify(req.body);
    return `URL: ${req.originalUrl} PARAMS: ${query} BODY: ${body}`;
  },
  {
    stream: {
      write(message) {
        winston.info(message);
      }
    }
  }
);

module.exports = { requestLogger, logger: winston };
