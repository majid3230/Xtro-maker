export const validateProcessRequest = (req, res, next) => {
  if (!req.body || Object.keys(req.body).length === 0) {
    return res.status(400).json({
      success: false,
      error: { message: 'Request body cannot be empty' }
    });
  }
  
  if (!req.body.data) {
    return res.status(400).json({
      success: false,
      error: { message: 'Missing required field: data' }
    });
  }

  next();
};
