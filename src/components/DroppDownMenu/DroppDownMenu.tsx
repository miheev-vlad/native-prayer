import { useNavigation } from '@react-navigation/core';
import { StackNavigationProp } from '@react-navigation/stack';
import React from 'react';
import { Modal, Pressable } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { MainStackParamList } from '../../navigation/Navigator';
import { RootState } from '../../redux/configureStore';
import { removeColumn } from '../../redux/ducks/column/columnSlice';
import { toggleMenu, toggleModal } from '../../redux/ducks/modal/modalSlice';
import {
  ArrowStyle,
  BackDropp,
  BackDroppTouch,
  ModalContainer,
  StyledMenu,
  StyledText,
  StyledTextDelete,
} from './styles';

type MyDeskScreenProp = StackNavigationProp<MainStackParamList, 'MyDesk'>;

export interface IValues {
  title: string;
  description?: string;
}

export const DroppDownMenu = ({ id, isShowMenu }: any) => {
  const dispatch = useDispatch();
  const token = useSelector((state: RootState) => state.auth.token);
  const navigation = useNavigation<MyDeskScreenProp>();

  return (
    <Modal
      animationType="fade"
      transparent={true}
      visible={isShowMenu}
      onRequestClose={() => {
        dispatch(toggleMenu({ isShowMenu: false }));
      }}>
      <React.Fragment>
        <BackDropp>
          <BackDroppTouch
            onPress={() => {
              dispatch(toggleMenu({ isShowMenu: false }));
            }}></BackDroppTouch>
        </BackDropp>
        <ModalContainer>
          <StyledMenu
            style={{
              shadowColor: '#000',
              shadowOffset: {
                width: 0,
                height: 2,
              },
              shadowOpacity: 0.25,
              shadowRadius: 4,
              elevation: 5,
            }}>
            <Pressable
              onPress={() => {
                dispatch(toggleMenu({ isShowMenu: false }));
              }}>
              <ArrowStyle>&#10150;</ArrowStyle>
            </Pressable>
            <Pressable
              onPress={() => {
                dispatch(toggleModal({ isShowModal: true }));
                dispatch(toggleMenu({ isShowMenu: false }));
              }}>
              <StyledText>Update Column</StyledText>
            </Pressable>
            <Pressable
              onPress={() => {
                dispatch(removeColumn({ token, id }));
                dispatch(toggleMenu({ isShowMenu: false }));
                navigation.navigate('MyDesk');
              }}>
              <StyledTextDelete>Delete Column</StyledTextDelete>
            </Pressable>
          </StyledMenu>
        </ModalContainer>
      </React.Fragment>
    </Modal>
  );
};
