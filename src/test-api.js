// Temporary API test - run this in browser console
import api from './services/api.js';

// Test API connection
api.get('/health')
  .then(response => console.log('API connected:', response.data))
  .catch(error => console.error('API error:', error.response?.status, error.message));