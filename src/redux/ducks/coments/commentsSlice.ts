import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AuthParamsType } from '../../../api/instance';

export interface ICommentsState {
  comments: IComment[];
  loading: boolean;
  error?: any;
  commentObjects: any;
  commentIds: number[];
  updateloading: boolean;
  updateId?: number;
}

export interface IComment {
  body: string;
  created: string;
  id: number;
  prayerId: number;
  userId: number;
}

export interface ResponseGetAllCommentsPayload {
  comments: IComment[];
}

export interface ResponseAddCommentPayload {
  body: string;
  created: string;
  id: number;
  prayerId: number;
  userId: number;
  card: any;
  user: any;
}

export interface ResponseUpdateCommentPayload {
  body: string;
  created: string;
  id: number;
  prayerId: number;
  userId: number;
}

export interface RequestRemoveCommentPayload {
  id: number;
}

export interface RequestUpdateCommentPayload {
  id: number;
  body: string;
}

export interface ResponseComentEntitiesPayload {
  entities: any;
  result: number;
}

export interface ResponseComentsPayload {
  entities: any;
  result: number[];
}

const initialState: ICommentsState = {
  comments: [],
  loading: false,
  commentObjects: {},
  commentIds: [],
  updateloading: false,
};

const commentsSlice = createSlice({
  name: 'comments',
  initialState,
  reducers: {
    getAllComments: (state, action: PayloadAction<AuthParamsType>) => {
      state.loading = true;
      action.payload;
    },
    setComments: (state, action: PayloadAction<ResponseComentsPayload>) => {
      state.loading = false;
      state.commentIds = action.payload.result;
      state.commentObjects = action.payload.entities.comments;
    },
    addComment: (
      state,
      action: PayloadAction<ResponseComentEntitiesPayload>,
    ) => {
      state.loading = false;
      state.commentIds.push(action.payload.result);
      if (state.commentObjects) {
        state.commentObjects[action.payload.result] =
          action.payload.entities.comment[action.payload.result];
      } else {
        state.commentObjects = action.payload.entities.comment;
      }
    },
    removeComment: (
      state,
      action: PayloadAction<RequestRemoveCommentPayload & AuthParamsType>,
    ) => {
      state.commentIds.splice(state.commentIds.indexOf(action.payload.id), 1);
      delete state.commentObjects[action.payload.id];
    },
    updateComment: (
      state,
      action: PayloadAction<ResponseComentEntitiesPayload>,
    ) => {
      state.updateloading = false;
      state.updateId = undefined;
      state.commentObjects[action.payload.result] =
        action.payload.entities.comment[action.payload.result];
    },
    putComment: (
      state,
      action: PayloadAction<RequestUpdateCommentPayload & AuthParamsType>,
    ) => {
      state.updateloading = true;
      state.updateId = action.payload.id;
      action.payload;
    },
    setError: (state, action: PayloadAction<any>) => {
      state.loading = false;
      state.error = action.payload;
    },
    setLoading: (state) => {
      state.updateloading = false;
      state.loading = false;
    },
  },
});

export const {
  getAllComments,
  setComments,
  addComment,
  removeComment,
  updateComment,
  putComment,
  setError,
  setLoading,
} = commentsSlice.actions;

export default commentsSlice.reducer;
