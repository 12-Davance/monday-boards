import axios from 'axios';

const base = process.env.REACT_APP_DEV_URL;

export const login = async (data) => {
  return axios.post(`${base}/login`, data).then((response) => response.data);
};

export const register = (data) => {
  return axios.post(`${base}/register`, data).then((response) => response.data);
};
