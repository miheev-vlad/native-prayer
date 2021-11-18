import axios, {AxiosResponse} from 'axios';

type RegisterData = {
  email: string;
  name: string;
  password: string;
};

export function requestRegisterUser(registerData: RegisterData) {
  return axios.post<any, AxiosResponse<any, any>, RegisterData>(
    'https://prayer.herokuapp.com/auth/sign-up',
    registerData,
  );
}
