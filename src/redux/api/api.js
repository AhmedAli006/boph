import axios from 'axios';

// setting up base URL
export const API = axios.create({
  
  baseURL: 'http://localhost:5000/',
});