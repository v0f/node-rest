const { PORT, MONGO_CONNECTION_STRING } = require('./common/config');
const app = require('./app');
const mongoose = require('mongoose');
const { logger } = require('./common/logger');

mongoose.connect(MONGO_CONNECTION_STRING, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false
});

const db = mongoose.connection;

db.on('error', () => logger.error('MongoDB connection error:'));
db.once('open', () => {
  logger.info('connected to mongoDB');
  app.listen(PORT, () =>
    logger.info(`App is running on http://localhost:${PORT}`)
  );
});
