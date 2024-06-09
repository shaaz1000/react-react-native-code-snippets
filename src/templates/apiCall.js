
import axios from 'axios';


const ${ componentName } = {

  get: async (url, config) => {
    try {
      const response = await axios.get(url, config);
      return response.data;
    } catch (error) {
      throw error;
    }
  },

  post: async (url, data, config) => {
    try {
      const response = await axios.post(url, data, config);
      return response.data;
    } catch (error) {
      throw error;
    }
  },

  put: async (url, data, config) => {
    try {
      const response = await axios.put(url, data, config);
      return response.data;
    } catch (error) {
      throw error;
    }
  },

  delete: async (url, config) => {
    try {
      const response = await axios.delete(url, config);
      return response.data;
    } catch (error) {
      throw error;
    }
  }
};


export default ${ componentName };
