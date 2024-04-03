// apiService.js
import axios from 'axios';

class ApiService {
  static async getAllFoods() {
    const endpoint = 'http://localhost:8080/api/foods/getAll';
    try {
      const response = await axios.get(endpoint);
      return response.data;
    } catch (error) {
      console.error('Error fetching foods:', error);
      throw error;
    }
  }

  static async createFood(foodData) {
    const endpoint = 'http://localhost:8080/api/foods/save';
    try {
      const response = await axios.post(endpoint, foodData);
      return response.data;
    } catch (error) {
      console.error('Error creating food:', error);
      throw error;
    }
  }

  static async getTotalNutrients(foods) {
    const endpoint = 'http://localhost:8080/api/foods/totalNutrients';
    try {
      const response = await axios.post(endpoint, foods);
      return response.data;
    } catch (error) {
      console.error('Error fetching total nutrients:', error);
      throw error;
    }
  }
}

export default ApiService;
