import axios from "axios";

const BASE_URL = 'http://192.168.1.64:8080';

const testBackendConnection = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/api/health`);
    console.log('Backend Response:', response.data);
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.error('Error connecting to backend:', error.message);
    } else {
      console.error('Unexpected error:', error);
    }
  }
};

export default testBackendConnection;
