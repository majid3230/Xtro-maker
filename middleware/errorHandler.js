import { logger } from '../utils/logger.js';
import { config } from '../config/env.js';

export const errorHandler = (err, req, res, next) => {
  logger.error('Unhandled Error', err);

  const statusCode = err.statusCode || 500;
  const message = err.message || 'Internal Server Error';

  res.status(statusCode).json({
    success: false,
    error: {
      message,
      ...(config.env === 'development' && { stack: err.stack })
    }
  });
};
