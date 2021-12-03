import { AxiosResponse } from 'axios';
import { apiColumnsInstance, AuthParamsType } from '../../../api/instance';

type CreateColumnData = {
  title: string;
  description: string;
  token: string;
};

type UpdateColumnData = {
  title: string;
  description: string;
  token: string;
  id: number;
};

type createPrayerData = {
  title: string;
  description: string;
  checked: boolean;
  token: string;
  id: number;
};

type ColumnByIdData = {
  id: number;
  token: string;
};

export function requestGetAllColumns(token: AuthParamsType) {
  const apiAuth = apiColumnsInstance(token);

  return apiAuth.get('/');
}

export function requestCreateColumn(createColumnData: CreateColumnData) {
  const { token, title, description } = createColumnData;
  const apiAuth = apiColumnsInstance({ token });

  return apiAuth.post<any, AxiosResponse<any, any>, any>('/', {
    title,
    description,
  });
}

export function requestGetColumnById(getColumnData: ColumnByIdData) {
  const { token, id } = getColumnData;
  const apiAuth = apiColumnsInstance({ token });

  return apiAuth.get<any, AxiosResponse<any, any>, any>(`/${id}`);
}

export function requestRemoveColumn(removeColumnData: ColumnByIdData) {
  const { token, id } = removeColumnData;
  const apiAuth = apiColumnsInstance({ token });

  return apiAuth.delete<any, AxiosResponse<any, any>, any>(`/${id}`);
}

export function requestUpdateColumn(updateColumnData: UpdateColumnData) {
  const { token, id, title, description } = updateColumnData;
  const apiAuth = apiColumnsInstance({ token });

  return apiAuth.put<any, AxiosResponse<any, any>, any>(`${id}`, {
    title,
    description,
  });
}

export function requestCreatePrayer(createPrayerData: createPrayerData) {
  const { token, id, title, description, checked } = createPrayerData;
  const apiAuth = apiColumnsInstance({ token });

  return apiAuth.post<any, AxiosResponse<any, any>, any>(`${id}/prayers`, {
    title,
    description,
    checked,
  });
}
