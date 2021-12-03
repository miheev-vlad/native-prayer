import React from 'react';
import { Field, Form } from 'react-final-form';
import { ActivityIndicator, Text } from 'react-native';
import { useDispatch } from 'react-redux';
import { CommentSvgIcon } from '../../../../assets/icons/CommentSvgIcon';
import { addComment } from '../../../redux/ducks/prayer/prayerSlice';
import { Colors } from '../../../styles/Colors';
import { AddCommentInput } from '../../AddCommentInput';
import { CommentCard } from './CommentCard';
import {
  CommentsWrapper,
  FormWrapper,
  IconContainer,
  StyledText,
} from './styles';

export interface IValues {
  body: string;
}

type CommentsProps = {
  id: number;
  commentsIds: number[];
  loading: boolean;
  token: string;
};

export const Comments: React.FC<CommentsProps> = ({
  id,
  commentsIds,
  loading,
  token,
}) => {
  const dispatch = useDispatch();

  return (
    <CommentsWrapper>
      <StyledText>Comments</StyledText>
      {!loading &&
        commentsIds.length > 0 &&
        commentsIds.map((item: number, index: number) => (
          <CommentCard item={item} index={index} key={item} />
        ))}
      {!loading && commentsIds.length === 0 && (
        <Text style={{ marginLeft: 15 }}>No comments yet...</Text>
      )}
      {loading && <ActivityIndicator size="small" color={Colors.rodeoDust} />}

      <Form
        onSubmit={(values: IValues, form) => {
          dispatch(
            addComment({
              id,
              token,
              body: values.body,
            }),
          );
          form.reset();
          form.resetFieldState('body');
        }}
        render={({ form }) => (
          <FormWrapper>
            <Field<string>
              name="body"
              placeholder="Add a comment..."
              component={AddCommentInput}
              validate={(v: string) =>
                v ? undefined : 'Please Enter a Comment'
              }
            />
            <IconContainer onPress={form.submit}>
              <CommentSvgIcon />
            </IconContainer>
          </FormWrapper>
        )}
      />
    </CommentsWrapper>
  );
};
