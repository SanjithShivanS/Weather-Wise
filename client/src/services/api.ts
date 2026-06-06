import axios from 'axios';

const API_BASE_URL = 'http://localhost:3001/api';

export const geocode = async (query: string) => {
  const response = await axios.get(`${API_BASE_URL}/geocoding?q=${query}`);
  return response.data.results || [];
};

export const getWeather = async (lat: number, lon: number) => {
  const response = await axios.get(`${API_BASE_URL}/weather?lat=${lat}&lon=${lon}`);
  return response.data;
};

export const getStats = async (lat: number, lon: number, startDate: string, endDate: string) => {
  const response = await axios.get(`${API_BASE_URL}/stats?lat=${lat}&lon=${lon}&startDate=${startDate}&endDate=${endDate}`);
  return response.data;
};
