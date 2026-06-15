import axios from 'axios';
import type { WeatherData, GeocodingResult } from '../types';

const API_BASE_URL = import.meta.env.DEV 
  ? 'http://localhost:3001/api' 
  : '/api';

export const geocode = async (query: string): Promise<GeocodingResult[]> => {
  const response = await axios.get(`${API_BASE_URL}/geocoding?q=${query}`);
  return response.data.results || [];
};

export const getWeather = async (lat: number, lon: number): Promise<WeatherData> => {
  const response = await axios.get(`${API_BASE_URL}/weather?lat=${lat}&lon=${lon}`);
  return response.data;
};

export const getStats = async (lat: number, lon: number, startDate: string, endDate: string): Promise<any> => {
  const response = await axios.get(`${API_BASE_URL}/stats?lat=${lat}&lon=${lon}&startDate=${startDate}&endDate=${endDate}`);
  return response.data;
};
