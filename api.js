const API_URL = import.meta.env.VITE_API_URL || 'https://jsonplaceholder.typicode.com';

class ApiError extends Error {
  constructor(message, status) {
    super(message);
    this.status = status;
  }
}

const fetchWithHandling = async (endpoint, options = {}) => {
  try {
    const response = await fetch(`${API_URL}${endpoint}`, {
      ...options,
      headers: {
        'Content-Type': 'application/json',
        ...options.headers,
      },
    });

    const data = await response.json().catch(() => null);

    if (!response.ok) {
      throw new ApiError(data?.message || 'An error occurred during the request', response.status);
    }

    return data;
  } catch (error) {
    if (error instanceof ApiError) throw error;
    throw new ApiError(error.message || 'Network error', 0);
  }
};

export const apiService = {
  get: (endpoint) => fetchWithHandling(endpoint),
  post: (endpoint, body) => fetchWithHandling(endpoint, { method: 'POST', body: JSON.stringify(body) }),
  put: (endpoint, body) => fetchWithHandling(endpoint, { method: 'PUT', body: JSON.stringify(body) }),
  delete: (endpoint) => fetchWithHandling(endpoint, { method: 'DELETE' }),
};
