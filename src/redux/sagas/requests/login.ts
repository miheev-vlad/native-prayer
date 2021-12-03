import { AxiosResponse } from 'axios';
import { apiAuthInstance } from '../../../api/instance';

type LoginData = {
  email: string;
  password: string;
};

export function requestLoginUser(loginData: LoginData) {
  const apiAuth = apiAuthInstance();

  return apiAuth.post<any, AxiosResponse<any, any>, LoginData>(
    '/sign-in',
    loginData,
  );
}
