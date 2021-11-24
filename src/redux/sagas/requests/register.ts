import { AxiosResponse } from 'axios';
import { apiAuthInstance } from '../../../api/instance';

type RegisterData = {
  email: string;
  name: string;
  password: string;
};

export function requestRegisterUser(registerData: RegisterData) {
  const apiAuth = apiAuthInstance();

  return apiAuth.post<any, AxiosResponse<any, any>, RegisterData>(
    '/sign-up',
    registerData,
  );
}
