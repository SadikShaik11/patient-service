import mongoose from 'mongoose'
import app from './app'
import logger from 'logger'
let server;
try {
  mongoose.connect(config.mongoose.url, config.mongoose.options).then(() => {
  logger.info('Connected to MongoDB');
  server = app.listen(config.port, () => {
    logger.info(`Listening to port ${config.port}`);
  });
});
} catch (error) {
  logger.error("server is failed to connect due to ", error)
}



