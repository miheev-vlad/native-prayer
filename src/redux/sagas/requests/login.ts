import axios, {AxiosResponse} from 'axios';

export function requestLoginUser() {
  return axios.post<any, AxiosResponse<any, any>, any>(
    'https://prayer.herokuapp.com/api/auth/sign-in',
    {
      email: 'email@mail.ru',
      password: '12345',
    },
  );
}
