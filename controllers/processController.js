import { processData } from '../services/processService.js';
import { logger } from '../utils/logger.js';

export const processRequest = async (req, res, next) => {
  try {
    const { data } = req.body;
    
    // Add a simple timeout pattern if the service takes too long
    const timeoutPromise = new Promise((_, reject) => {
      setTimeout(() => reject(new Error('Processing timeout exceeded')), 5000);
    });

    const result = await Promise.race([
      processData(data),
      timeoutPromise
    ]);

    logger.info('Processed request successfully', { dataLength: data.length });

    res.status(200).json({
      success: true,
      data: result
    });
  } catch (error) {
    if (error.message === 'Processing timeout exceeded') {
      error.statusCode = 408; // Request Timeout
    }
    next(error);
  }
};
