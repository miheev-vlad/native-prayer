import { AxiosResponse } from 'axios';
import { apiPrayersInstance, AuthParamsType } from '../../../api/instance';

type UpdatePrayerData = {
  title: string;
  description: string;
  checked: boolean;
  token: string;
  id: number;
};

type RemovePrayerData = {
  token: string;
  id: number;
};

type GetPrayerByIdData = {
  token: string;
  id: number;
};

type AddCommentData = {
  token: string;
  id: number;
  body: string;
};

export function requestGetAllPrayers(token: AuthParamsType) {
  const apiAuth = apiPrayersInstance(token);

  return apiAuth.get('/');
}

export function requestUpdatePrayer(updatePrayerData: UpdatePrayerData) {
  const { token, id, title, description, checked } = updatePrayerData;
  const apiAuth = apiPrayersInstance({ token });

  return apiAuth.put<any, AxiosResponse<any, any>, any>(`${id}`, {
    title,
    description,
    checked,
  });
}

export function requestRemovePrayer(removePrayerData: RemovePrayerData) {
  const { token, id } = removePrayerData;
  const apiAuth = apiPrayersInstance({ token });

  return apiAuth.delete<any, AxiosResponse<any, any>, any>(`${id}`);
}

export function requestGetPrayerById(getPrayerByIdData: GetPrayerByIdData) {
  const { token, id } = getPrayerByIdData;
  const apiAuth = apiPrayersInstance({ token });

  return apiAuth.get<any, AxiosResponse<any, any>, any>(`${id}`);
}

export function requestAddComment(addCommentData: AddCommentData) {
  const { token, id, body } = addCommentData;
  const apiAuth = apiPrayersInstance({ token });

  return apiAuth.post<any, AxiosResponse<any, any>, any>(`${id}/comments`, {
    body,
  });
}
