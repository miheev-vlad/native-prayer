import axios, {AxiosResponse} from 'axios';

type LoginData = {
  email: string;
  password: string;
};

export function requestLoginUser(loginData: LoginData) {
  return axios.post<any, AxiosResponse<any, any>, LoginData>(
    'https://prayer.herokuapp.com/auth/sign-in',
    loginData,
  );
}
