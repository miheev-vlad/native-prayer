import React, { useState } from 'react';
import { Field, Form } from 'react-final-form';
import { ActivityIndicator, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import moment from 'moment';
import { RootState } from '../../../../redux/configureStore';
import { putComment } from '../../../../redux/ducks/comments/commentsSlice';
import { AddCommentInput } from '../../../AddCommentInput';
import { DotOptionsMenu } from '../DotOptionsMenu';
import {
  AvatarImg,
  BtnCloseText,
  BtnText,
  CommentCardContainer,
  CommentDate,
  CommentNameContainer,
  CommentText,
  FormContainer,
  FormWrapper,
  IconContainerUnUpdate,
  IconContainerUpdate,
  StyledName,
} from './styles';
import { Colors } from '../../../../styles/Colors';
import { nameSelector } from '../../../../redux/ducks/user';

export interface IValues {
  body: string;
}

type CommentCardProps = {
  item: number;
  index: number;
};

export const CommentCard: React.FC<CommentCardProps> = ({ item, index }) => {
  const [isShowInput, setIsShowInput] = useState(false);
  const dispatch = useDispatch();
  const token = useSelector((state: RootState) => state.auth.token);
  const userName = useSelector(nameSelector());
  const updateLoading = useSelector(
    (state: RootState) => state.comments.updateloading,
  );
  const updateId = useSelector((state: RootState) => state.comments.updateId);
  const comment = useSelector(
    (state: RootState) => state.comments.commentObjects[item],
  );

  return (
    <CommentCardContainer
      key={index}
      style={index !== 0 && { borderTopWidth: 0 }}>
      <View>
        <AvatarImg
          source={{
            uri:
              comment.id % 2 === 0
                ? 'https://media.istockphoto.com/photos/portrait-of-happy-cheerful-woman-showing-peace-gesture-isolated-over-picture-id1286942214?b=1&k=20&m=1286942214&s=170667a&w=0&h=bQwbpgRAWuTxvgQmoNRKL92zrBeTjI72DtNqDvB1xVg='
                : comment.id % 3 === 0
                ? 'https://miro.medium.com/max/1400/1*mYMcDYjJPlP6v120J8wsRw.jpeg'
                : 'https://www.hunkstheshow.com/wp-content/uploads/pretty-girls-night-out-1500x1000.jpg',
          }}
        />
      </View>
      <View>
        <CommentNameContainer>
          <StyledName>{userName}</StyledName>
          <CommentDate>{moment(comment.created).fromNow()}</CommentDate>
        </CommentNameContainer>
        {updateLoading && updateId === item ? (
          <ActivityIndicator size="small" color={Colors.liver} />
        ) : isShowInput ? (
          <Form
            onSubmit={(values: IValues, form) => {
              if (!values.body.trim()) {
                return;
              }
              dispatch(
                putComment({
                  token,
                  id: comment.id,
                  body: values.body,
                }),
              );
              form.reset();
              form.resetFieldState('body');
              setIsShowInput(false);
            }}
            initialValues={{
              body: comment.body,
            }}
            render={({ form }) => (
              <FormWrapper>
                <FormContainer>
                  <Field<string>
                    name="body"
                    placeholder="Add a comment..."
                    component={AddCommentInput}
                  />
                  <IconContainerUpdate onPress={form.submit}>
                    <BtnText>OK</BtnText>
                  </IconContainerUpdate>
                  <IconContainerUnUpdate
                    onPress={() => {
                      setIsShowInput(false);
                    }}>
                    <BtnCloseText>X</BtnCloseText>
                  </IconContainerUnUpdate>
                </FormContainer>
              </FormWrapper>
            )}
          />
        ) : (
          <CommentText>{comment.body}</CommentText>
        )}
      </View>
      <DotOptionsMenu
        id={comment.id}
        setIsShowInput={setIsShowInput}
        isShowInput={isShowInput}
      />
    </CommentCardContainer>
  );
};
