import React from 'react';
import { Field, Form } from 'react-final-form';
import { Text, View } from 'react-native';
import Modal from 'react-native-modal';
import { useDispatch, useSelector } from 'react-redux';
import { SCREEN_HEIGHT } from '../../helpers/DimensionsHelper';
import { RootState } from '../../redux/configureStore';
import {
  createColumn,
  updateColumn,
} from '../../redux/ducks/column/columnSlice';
import { toggleModal } from '../../redux/ducks/modal/modalSlice';
import { Colors } from '../../styles/Colors';
import { Button } from '../Button';
import { Input } from '../Input';
import {
  CloseBtnContainer,
  CloseBtnWrapper,
  FormContainer,
  HeadingWrapper,
  StyledText,
} from './styles';

export interface IValues {
  title: string;
  description?: string;
}

export const ModalWindow = ({ isUpdate, id }: any) => {
  const dispatch = useDispatch();
  const isShowModal = useSelector(
    (state: RootState) => state.modal.isShowModal,
  );
  const token = useSelector((state: RootState) => state.auth.token);
  const currentColumn = useSelector(
    (state: RootState) => state.columns.currentColumn,
  );
  let columnTitle = '';
  if (id) {
    columnTitle = currentColumn?.title || '';
  }

  return (
    <Modal
      isVisible={isShowModal}
      backdropColor={Colors.white}
      backdropOpacity={1}
      style={{ margin: 0 }}>
      <View
        style={{
          flex: 1,
          height: SCREEN_HEIGHT,
        }}>
        <CloseBtnWrapper>
          <CloseBtnContainer
            onPress={() => {
              dispatch(toggleModal({ isShowModal: false }));
            }}>
            <Text>&#x2715;</Text>
          </CloseBtnContainer>
        </CloseBtnWrapper>
        <HeadingWrapper>
          <StyledText>
            {isUpdate ? 'Update Column' : 'Create Column'}
          </StyledText>
        </HeadingWrapper>
        <Form
          onSubmit={(values: IValues) => {
            if (!isUpdate) {
              dispatch(
                createColumn({
                  title: values.title,
                  description: values.description || '',
                  token,
                }),
              );
            } else {
              dispatch(
                updateColumn({
                  title: values.title,
                  description: values.description || '',
                  token,
                  id,
                }),
              );
            }
            dispatch(toggleModal({ isShowModal: false }));
          }}
          initialValues={{
            title: columnTitle,
          }}
          render={({ form }) => (
            <FormContainer>
              <Field<string>
                name="title"
                placeholder="Title"
                component={Input}
                validate={(v: string) => (v ? undefined : 'Title is Required')}
              />
              <Field<string>
                name="description"
                placeholder="Description"
                component={Input}
              />
              <Button onPress={form.submit}>
                {isUpdate ? 'Update' : 'Create'}
              </Button>
            </FormContainer>
          )}
        />
      </View>
    </Modal>
  );
};
