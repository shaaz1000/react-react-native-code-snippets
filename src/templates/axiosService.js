import axios from 'axios';

const apiClient = axios.create({
  baseURL: process.env.REACT_APP_API_URL || 'http://localhost:3000/api',
  headers: {
    'Content-Type': 'application/json',
  },
});

export const get${componentName} = async (id) => {
  try {
    const response = await apiClient.get(`/${componentName.toLowerCase()}/${id}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const create${componentName} = async (data) => {
  try {
    const response = await apiClient.post(`/${componentName.toLowerCase()}`, data);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const update${componentName} = async (id, data) => {
  try {
    const response = await apiClient.put(`/${componentName.toLowerCase()}/${id}`, data);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const delete${componentName} = async (id) => {
  try {
    await apiClient.delete(`/${componentName.toLowerCase()}/${id}`);
  } catch (error) {
    throw error;
  }
};
