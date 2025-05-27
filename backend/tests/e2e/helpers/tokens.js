const axios = require('./request');

const API_URL = process.env.E2E_API_URL || 'http://localhost:3000/api';

async function login(email, password) {
  const res = await axios.post(`${API_URL}/auth/login`, { email, password });
  return res.data.tokens.idToken;
}

module.exports = { login }; 