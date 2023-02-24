import axios from 'axios';

const base = process.env.REACT_APP_PROD_URL;

export const getRecords = async () => {
  return axios.get(`${base}/boards`).then((response) => response.data);
};

export const searchRecords = async (params) => {
  return axios
    .get(`${base}/boards/search`, { params })
    .then((response) => response.data);
};
