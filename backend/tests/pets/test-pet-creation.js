const axios = require('axios');
require('dotenv').config();

const baseUrl = 'http://localhost:3000/api';

const testPetCreation = async () => {
  try {
    // First register a test user
    const registerResponse = await axios.post(`${baseUrl}/auth/register`, {
      email: `testuser${Date.now()}@example.com`,
      password: 'Test123456!',
      name: 'Test User'
    });
    
    console.log('User registered successfully');
    const token = registerResponse.data.tokens.idToken;
    
    // Test data with a real working image URL
    const testData = {
      name: 'Test Pet',
      species: 'Dog',
      breed: 'Mixed',
      age: 3,
      status: 'available',
      description: 'A test pet',
      images: [
        'https://dummyimage.com/300x200/ff9900/ffffff&text=Pet+Image'
      ]
    };
    
    console.log('Attempting to create pet with data:', JSON.stringify(testData));
    
    try {
      // Create pet request
      const response = await axios.post(`${baseUrl}/pets`, testData, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      
      console.log('Pet created successfully!');
      console.log('Status:', response.status);
      console.log('Response data:', JSON.stringify(response.data, null, 2));
      
      return { success: true, data: response.data };
    } catch (error) {
      console.error('Error during pet creation:');
      console.error('Status:', error.response?.status);
      console.error('Status text:', error.response?.statusText);
      console.error('Error data:', JSON.stringify(error.response?.data, null, 2));
      console.error('Request config:', JSON.stringify({
        url: error.config?.url,
        method: error.config?.method,
        headers: error.config?.headers,
        data: JSON.parse(error.config?.data || '{}')
      }, null, 2));
      throw error;
    }
  } catch (error) {
    console.error('Error during test:');
    console.error('Status:', error.response?.status);
    console.error('Error data:', error.response?.data);
    console.error('Stack:', error.stack);
    return { success: false, error };
  }
};

// Run the test
testPetCreation()
  .then(result => {
    console.log('Test completed:', result.success ? 'SUCCESS' : 'FAILED');
    process.exit(result.success ? 0 : 1);
  })
  .catch(err => {
    console.error('Unhandled error in test:', err);
    process.exit(1);
  }); 