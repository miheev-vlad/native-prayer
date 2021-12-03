import axios from 'axios';

export type AuthParamsType = {
  token: string;
};

export const apiAuthInstance = () => {
  const config = {
    baseURL: 'https://prayer.herokuapp.com/auth',
  };

  return axios.create(config);
};

export const apiColumnsInstance = ({ token }: AuthParamsType) => {
  const config = {
    baseURL: 'https://prayer.herokuapp.com/columns',
    headers: { Authorization: '' },
  };

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return axios.create(config);
};

export const apiPrayersInstance = ({ token }: AuthParamsType) => {
  const config = {
    baseURL: 'https://prayer.herokuapp.com/prayers',
    headers: { Authorization: '' },
  };

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return axios.create(config);
};

export const apiCommentsInstance = ({ token }: AuthParamsType) => {
  const config = {
    baseURL: 'https://prayer.herokuapp.com/comments',
    headers: { Authorization: '' },
  };

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return axios.create(config);
};
