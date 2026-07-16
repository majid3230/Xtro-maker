export const processData = async (data) => {
  // Simulate processing time
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        processed: true,
        originalData: data,
        processedAt: new Date().toISOString()
      });
    }, 100); // 100ms processing simulation
  });
};
