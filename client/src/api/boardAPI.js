import axios from 'axios';

const base = process.env.REACT_APP_PROD_URL;
const mondayUrl = process.env.REACT_APP_MONDAY_URL;
const mondayToken = process.env.REACT_APP_MONDAY_TOKEN;

export const getBoards = async (query) => {
  const config = {
    headers: {
      Authorization: mondayToken,
    },
  };

  const body = JSON.stringify({
    query,
  });

  return axios.post(mondayUrl, body, config).then((response) => {
    return response.data.data.boards.filter(
      (item) => !item.name.includes('Subitems')
    );
  });
};

export const saveBoardData = async (data) => {
  return axios
    .post(`${base}/boards/save`, data)
    .then((response) => response.data);
};
