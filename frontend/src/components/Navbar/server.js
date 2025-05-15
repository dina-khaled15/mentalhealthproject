import axios from 'axios';

const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:4000';

// Configure axios defaults
axios.defaults.withCredentials = true; // Include cookies in requests

// Add token to requests if available
axios.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Handle token expiration
axios.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response && error.response.status === 401) {
      // Token expired or invalid
      localStorage.removeItem('token');
      // Optionally redirect to login page
      // window.location.href = '/login';
    }
    return Promise.reject(error);
  }
);

/**
 * Register a new user
 * @param {Object} userData - User registration data
 * @returns {Promise} - Server response
 */
export const register = async (userData) => {
  try {
    const response = await axios.post(`${API_URL}/api/auth/register`, userData);
    if (response.data.token) {
      localStorage.setItem('token', response.data.token);
    }
    return response.data;
  } catch (error) {
    throw error.response ? error.response.data : new Error('Registration failed');
  }
};

/**
 * Login a user
 * @param {Object} loginData - Login credentials
 * @returns {Promise} - Server response
 */
export const login = async (loginData) => {
  try {
    const response = await axios.post(`${API_URL}/api/auth/login`, loginData);
    if (response.data.token) {
      localStorage.setItem('token', response.data.token);
    }
    return response.data;
  } catch (error) {
    throw error.response ? error.response.data : new Error('Login failed');
  }
};

/**
 * Google OAuth login
 * @param {string} token - Google token ID
 * @returns {Promise} - Server response
 */
export const googleLogin = async (token) => {
  try {
    const response = await axios.post(`${API_URL}/api/auth/google`, { token });
    if (response.data.token) {
      localStorage.setItem('token', response.data.token);
    }
    return response.data;
  } catch (error) {
    throw error.response ? error.response.data : new Error('Google login failed');
  }
};

/**
 * Microsoft OAuth login
 * @param {Object} msData - Microsoft authentication data
 * @returns {Promise} - Server response
 */
export const microsoftLogin = async (msData) => {
  try {
    const response = await axios.post(`${API_URL}/api/auth/microsoft`, msData);
    if (response.data.token) {
      localStorage.setItem('token', response.data.token);
    }
    return response.data;
  } catch (error) {
    throw error.response ? error.response.data : new Error('Microsoft login failed');
  }
};

/**
 * Get current user profile
 * @returns {Promise} - Server response with user data
 */
export const getCurrentUser = async () => {
  try {
    const response = await axios.get(`${API_URL}/api/auth/profile`);
    return response.data;
  } catch (error) {
    throw error.response ? error.response.data : new Error('Failed to fetch user profile');
  }
};

/**
 * Logout the current user
 * @returns {void}
 */
export const logout = () => {
  localStorage.removeItem('token');
  // Optional: Call logout endpoint to invalidate token on server
  // return axios.post(`${API_URL}/api/auth/logout`);
};

/**
 * Check if user is authenticated
 * @returns {boolean} - Authentication status
 */
export const isAuthenticated = () => {
  const token = localStorage.getItem('token');
  return !!token; // Returns true if token exists
};

/**
 * Update user profile
 * @param {Object} userData - Updated user data
 * @returns {Promise} - Server response
 */
export const updateProfile = async (userData) => {
  try {
    const response = await axios.put(`${API_URL}/api/auth/profile`, userData);
    return response.data;
  } catch (error) {
    throw error.response ? error.response.data : new Error('Failed to update profile');
  }
};

/**
 * Change user password
 * @param {Object} passwordData - Contains oldPassword and newPassword
 * @returns {Promise} - Server response
 */
export const changePassword = async (passwordData) => {
  try {
    const response = await axios.post(`${API_URL}/api/auth/change-password`, passwordData);
    return response.data;
  } catch (error) {
    throw error.response ? error.response.data : new Error('Failed to change password');
  }
};

/**
 * Request password reset
 * @param {Object} emailData - Contains user email
 * @returns {Promise} - Server response
 */
export const requestPasswordReset = async (emailData) => {
  try {
    const response = await axios.post(`${API_URL}/api/auth/forgot-password`, emailData);
    return response.data;
  } catch (error) {
    throw error.response ? error.response.data : new Error('Failed to request password reset');
  }
};

/**
 * Reset password with token
 * @param {Object} resetData - Contains token and new password
 * @returns {Promise} - Server response
 */
export const resetPassword = async (resetData) => {
  try {
    const response = await axios.post(`${API_URL}/api/auth/reset-password`, resetData);
    return response.data;
  } catch (error) {
    throw error.response ? error.response.data : new Error('Failed to reset password');
  }
};

/**
 * Verify email address
 * @param {string} token - Verification token
 * @returns {Promise} - Server response
 */
export const verifyEmail = async (token) => {
  try {
    const response = await axios.get(`${API_URL}/api/auth/verify-email/${token}`);
    return response.data;
  } catch (error) {
    throw error.response ? error.response.data : new Error('Email verification failed');
  }
};

export default {
  register,
  login,
  googleLogin,
  microsoftLogin,
  getCurrentUser,
  logout,
  isAuthenticated,
  updateProfile,
  changePassword,
  requestPasswordReset,
  resetPassword,
  verifyEmail
};