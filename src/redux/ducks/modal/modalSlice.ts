import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface IModalState {
  isShowModal: boolean;
  isShowMenu: boolean;
}

export interface RequestModalPayload {
  isShowModal: boolean;
}

export interface RequestMenuPayload {
  isShowMenu: boolean;
}

const initialState: IModalState = {
  isShowModal: false,
  isShowMenu: false,
};

const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    toggleModal: (state, action: PayloadAction<RequestModalPayload>) => {
      state.isShowModal = action.payload.isShowModal;
    },
    toggleMenu: (state, action: PayloadAction<RequestMenuPayload>) => {
      state.isShowMenu = action.payload.isShowMenu;
    },
  },
});

export const { toggleModal, toggleMenu } = modalSlice.actions;

export default modalSlice.reducer;
