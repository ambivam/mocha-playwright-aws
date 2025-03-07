import axios from 'axios';
import dotenv from 'dotenv';
dotenv.config();

class APIClient {
  constructor() {
    this.client = axios.create({
      baseURL: process.env.API_BASE_URL,
      headers: { 'Content-Type': 'application/json' }
    });
  }

  async get(endpoint) {
    return this.client.get(endpoint);
  }

  async post(endpoint, data) {
    return this.client.post(endpoint, data);
  }

  async put(endpoint, data) {
    return this.client.put(endpoint, data);
  }

  async delete(endpoint) {
    return this.client.delete(endpoint);
  }
}

export default new APIClient();