import { AxiosResponse } from 'axios';
import { apiCommentsInstance, AuthParamsType } from '../../../api/instance';

type RemoveCommentData = {
  token: string;
  id: number;
};

type UpdateCommentData = {
  token: string;
  id: number;
  body: string;
};

export function requestGetAllComments(token: AuthParamsType) {
  const apiAuth = apiCommentsInstance(token);

  return apiAuth.get('/');
}

export function requestRemoveComment(removeCommentData: RemoveCommentData) {
  const { token, id } = removeCommentData;
  const apiAuth = apiCommentsInstance({ token });

  return apiAuth.delete<AxiosResponse<any, any>>(`${id}`);
}

export function requestUpdateComment(updateCommentData: UpdateCommentData) {
  const { token, id, body } = updateCommentData;
  const apiAuth = apiCommentsInstance({ token });

  return apiAuth.put(`${id}`, {
    body,
  });
}
