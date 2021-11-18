import axios from 'axios';

export const apiAuthInstance = () => {
  const config = {
    baseURL: 'https://prayer.herokuapp.com/auth',
  };

  return axios.create(config);
};
