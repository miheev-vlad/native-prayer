import React from 'react';
import { Alert, ScrollView, TouchableOpacity } from 'react-native';
import { RoundAddSvgIcon } from '../../../../assets/icons/RoundAddSvgIcon';
import {
  AddBtnContainer,
  MemberItem,
  MemberItemWrapp,
  MembersContainer,
  StyledText,
} from './styles';

export interface IMember {
  id: number;
  name: string;
  avatar: string;
}

export const MembersData: IMember[] = [
  {
    id: 1,
    name: 'kriss2000',
    avatar:
      'https://media.istockphoto.com/photos/portrait-of-happy-cheerful-woman-showing-peace-gesture-isolated-over-picture-id1286942214?b=1&k=20&m=1286942214&s=170667a&w=0&h=bQwbpgRAWuTxvgQmoNRKL92zrBeTjI72DtNqDvB1xVg=',
  },
  {
    id: 2,
    name: 'kate2000',
    avatar:
      'https://media.istockphoto.com/photos/portrait-of-happy-cheerful-woman-showing-peace-gesture-isolated-over-picture-id1286942214?b=1&k=20&m=1286942214&s=170667a&w=0&h=bQwbpgRAWuTxvgQmoNRKL92zrBeTjI72DtNqDvB1xVg=',
  },
  {
    id: 3,
    name: 'jon2000',
    avatar:
      'https://media.istockphoto.com/photos/portrait-of-happy-cheerful-woman-showing-peace-gesture-isolated-over-picture-id1286942214?b=1&k=20&m=1286942214&s=170667a&w=0&h=bQwbpgRAWuTxvgQmoNRKL92zrBeTjI72DtNqDvB1xVg=',
  },
  {
    id: 4,
    name: 'bob2000',
    avatar:
      'https://media.istockphoto.com/photos/portrait-of-happy-cheerful-woman-showing-peace-gesture-isolated-over-picture-id1286942214?b=1&k=20&m=1286942214&s=170667a&w=0&h=bQwbpgRAWuTxvgQmoNRKL92zrBeTjI72DtNqDvB1xVg=',
  },
  {
    id: 5,
    name: 'ann2000',
    avatar:
      'https://media.istockphoto.com/photos/portrait-of-happy-cheerful-woman-showing-peace-gesture-isolated-over-picture-id1286942214?b=1&k=20&m=1286942214&s=170667a&w=0&h=bQwbpgRAWuTxvgQmoNRKL92zrBeTjI72DtNqDvB1xVg=',
  },
];

export const Members: React.FC = () => {
  return (
    <MembersContainer>
      <StyledText>Members</StyledText>
      <ScrollView
        horizontal={true}
        style={{ paddingTop: 12 }}
        showsHorizontalScrollIndicator={false}>
        {MembersData.map((item: IMember, index: number) => (
          <MemberItemWrapp
            key={item.id}
            style={index === 0 && { marginLeft: 15 }}>
            <TouchableOpacity>
              <MemberItem
                source={{
                  uri: item.avatar,
                }}
              />
            </TouchableOpacity>
          </MemberItemWrapp>
        ))}
        <MemberItemWrapp>
          <AddBtnContainer onPress={() => Alert.alert('Adding member')}>
            <RoundAddSvgIcon />
          </AddBtnContainer>
        </MemberItemWrapp>
      </ScrollView>
    </MembersContainer>
  );
};
