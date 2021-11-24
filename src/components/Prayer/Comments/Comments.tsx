import React from 'react';
import { Field, Form } from 'react-final-form';
import { Alert, Dimensions, View } from 'react-native';
import { CommentSvgIcon } from '../../../../assets/icons/CommentSvgIcon';
import { AddCommentInput } from '../../AddCommentInput';
import {
  AvatarImg,
  CommentCard,
  CommentDate,
  CommentNameContainer,
  CommentsWrapp,
  CommentText,
  FormWrapp,
  IconContainer,
  StyledName,
  StyledText,
} from './styles';

export const SCREEN_WIDTH = Dimensions.get('window').width;

export interface IComment {
  id: number;
  name: string;
  avatar: string;
  text: string;
  date: string;
}

export interface IValues {
  comment: string;
}

export const CommentsData: IComment[] = [
  {
    id: 1,
    name: 'Anna Barber',
    avatar:
      'https://media.istockphoto.com/photos/portrait-of-happy-cheerful-woman-showing-peace-gesture-isolated-over-picture-id1286942214?b=1&k=20&m=1286942214&s=170667a&w=0&h=bQwbpgRAWuTxvgQmoNRKL92zrBeTjI72DtNqDvB1xVg=',
    text: 'Hey, Hey!',
    date: '2 days ago',
  },
  {
    id: 2,
    name: 'Hanna Barber',
    avatar:
      'https://media.istockphoto.com/photos/portrait-of-happy-cheerful-woman-showing-peace-gesture-isolated-over-picture-id1286942214?b=1&k=20&m=1286942214&s=170667a&w=0&h=bQwbpgRAWuTxvgQmoNRKL92zrBeTjI72DtNqDvB1xVg=',
    text: 'Hi!',
    date: '2 days ago',
  },
  {
    id: 3,
    name: 'Gloria Barber',
    avatar:
      'https://media.istockphoto.com/photos/portrait-of-happy-cheerful-woman-showing-peace-gesture-isolated-over-picture-id1286942214?b=1&k=20&m=1286942214&s=170667a&w=0&h=bQwbpgRAWuTxvgQmoNRKL92zrBeTjI72DtNqDvB1xVg=',
    text: 'How you doing?',
    date: '2 days ago',
  },
  {
    id: 4,
    name: 'bob2000',
    avatar:
      'https://media.istockphoto.com/photos/portrait-of-happy-cheerful-woman-showing-peace-gesture-isolated-over-picture-id1286942214?b=1&k=20&m=1286942214&s=170667a&w=0&h=bQwbpgRAWuTxvgQmoNRKL92zrBeTjI72DtNqDvB1xVg=',
    text: 'Hey, Hey!',
    date: '2 days ago',
  },
  {
    id: 5,
    name: 'ann2000',
    avatar:
      'https://media.istockphoto.com/photos/portrait-of-happy-cheerful-woman-showing-peace-gesture-isolated-over-picture-id1286942214?b=1&k=20&m=1286942214&s=170667a&w=0&h=bQwbpgRAWuTxvgQmoNRKL92zrBeTjI72DtNqDvB1xVg=',
    text: 'Hey, Hey!',
    date: '2 days ago',
  },
];

export const Comments: React.FC = () => {
  return (
    <CommentsWrapp>
      <StyledText>Comments</StyledText>
      {CommentsData.map((item: IComment, index: number) => (
        <CommentCard key={item.id} style={index !== 0 && { borderTopWidth: 0 }}>
          <View>
            <AvatarImg
              source={{
                uri: item.avatar,
              }}
            />
          </View>
          <View>
            <CommentNameContainer>
              <StyledName>{item.name}</StyledName>
              <CommentDate>{item.date}</CommentDate>
            </CommentNameContainer>
            <CommentText>{item.text}</CommentText>
          </View>
        </CommentCard>
      ))}

      <Form
        onSubmit={(values: IValues, form) => {
          Alert.alert(JSON.stringify(values));
          form.reset();
          form.resetFieldState('comment');
        }}
        render={({ form }) => (
          <FormWrapp>
            <Field<string>
              name="comment"
              placeholder="Add a comment..."
              component={AddCommentInput}
              validate={(v: string) =>
                v ? undefined : 'Please Enter a Comment'
              }
            />
            <IconContainer onPress={form.submit}>
              <CommentSvgIcon />
            </IconContainer>
          </FormWrapp>
        )}
      />
    </CommentsWrapp>
  );
};
