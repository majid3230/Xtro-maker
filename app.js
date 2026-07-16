import express from 'express';
import helmet from 'helmet';
import cors from 'cors';
import { config } from './config/env.js';
import { logger } from './utils/logger.js';
import { errorHandler } from './middleware/errorHandler.js';
import { notFound } from './middleware/notFound.js';

import healthRoutes from './routes/healthRoutes.js';
import processRoutes from './routes/processRoutes.js';

const app = express();

// Security and utility middlewares
app.use(helmet());
app.use(cors({ origin: config.corsOrigin }));
app.use(express.json({ limit: '1mb' })); // Limit body size to protect against large payloads

// Request logging middleware
app.use((req, res, next) => {
  logger.info('Incoming request', { method: req.method, url: req.url });
  next();
});

// JSON validation error handling (e.g. malformed JSON)
app.use((err, req, res, next) => {
  if (err instanceof SyntaxError && err.status === 400 && 'body' in err) {
    logger.error('Invalid JSON payload', err);
    return res.status(400).json({ success: false, error: { message: 'Invalid JSON payload' } });
  }
  next(err);
});

// Routes
app.use('/api/health', healthRoutes);
app.use('/api/process', processRoutes);

// 404 Handler
app.use(notFound);

// Centralized Error Handler
app.use(errorHandler);

export default app;
