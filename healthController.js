export const getHealth = (req, res) => {
  res.status(200).json({
    success: true,
    data: {
      status: 'UP',
      uptime: process.uptime(),
      version: process.version,
      timestamp: new Date().toISOString()
    }
  });
};
