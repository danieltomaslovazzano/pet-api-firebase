const axios = require('axios');

const API_URL = 'http://localhost:3000/api';

async function testPoolUserLogin() {
  try {
    console.log('Testing pool user login...');
    const response = await axios.post(`${API_URL}/auth/login`, {
      email: 'test-user-01@example.com',
      password: 'TestPass123!'
    });
    console.log('✅ Pool user login successful:', {
      success: response.data.success,
      hasToken: !!response.data.data?.tokens?.idToken,
      user: response.data.data?.user?.email,
      userId: response.data.data?.user?.uid
    });
    return true;
  } catch (error) {
    console.error('❌ Pool user login failed:', error.response?.data || error.message);
    return false;
  }
}

testPoolUserLogin(); 