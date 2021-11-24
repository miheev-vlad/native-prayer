import { useNavigation } from '@react-navigation/core';
import { StackNavigationProp } from '@react-navigation/stack';
import React, { useState } from 'react';
import { Dimensions, TouchableOpacity, Alert, View } from 'react-native';
import Swipeable from 'react-native-gesture-handler/Swipeable';
import { CheckBox } from 'react-native-elements';
import { PrayerLineSvgIcon } from '../../../assets/icons/PrayerLineSvgIcon';
import { StateSvgIcon } from '../../../assets/icons/StateSvgIcon';
import { UserSvgIcon } from '../../../assets/icons/UserSvgIcon';
import { PrayerTextHelper } from '../../helpers/TextHelper';
import { MainStackParamList } from '../../navigation/Navigator';
import { IPrayer } from '../../redux/ducks/prayer/prayerSlice';
import {
  StyledDeleteBtn,
  StyledGroupContainer,
  StyledContainer,
  StyledText,
  StyledPrayerText,
  IvonContainer,
  UserData,
  LineData,
  StateIvonContainer,
  PrayerTextContainer,
  CheckBoxContainer,
} from './styles';
import { CheckedSvgIcon } from '../../../assets/icons/CheckedSvgIcon';
import { UnCheckedSvgIcon } from '../../../assets/icons/UnCheckedSvgIcon';
import { Colors } from '../../styles/Colors';

export const SCREEN_WIDTH = Dimensions.get('window').width;

type PrayerBoxProp = StackNavigationProp<MainStackParamList, 'Detail'>;

type PrayerBoxType = {
  data: IPrayer;
  handleDelete(): void;
};

export const PrayerBox: React.FC<PrayerBoxType> = (props) => {
  const [toggleCheckBox, setToggleCheckBox] = useState(props.data.checked);
  const navigate = useNavigation<PrayerBoxProp>();

  const rightSwipe = () => {
    return (
      <TouchableOpacity onPress={props.handleDelete} activeOpacity={0.8}>
        <StyledDeleteBtn>
          <StyledText>Delete</StyledText>
        </StyledDeleteBtn>
      </TouchableOpacity>
    );
  };

  return (
    <Swipeable renderRightActions={rightSwipe}>
      <TouchableOpacity onPress={() => navigate.navigate('Detail')}>
        <StyledContainer>
          <StyledGroupContainer>
            <StateIvonContainer>
              <StateSvgIcon
                color={
                  props.data.id === 1
                    ? Colors.roseVale
                    : props.data.id === 2
                    ? Colors.moonstoneBlue
                    : Colors.rodeoDust
                }
              />
            </StateIvonContainer>
            <CheckBoxContainer>
              <CheckBox
                onPress={() => setToggleCheckBox(!toggleCheckBox)}
                checkedIcon={<CheckedSvgIcon />}
                uncheckedIcon={<UnCheckedSvgIcon />}
                checked={toggleCheckBox}
              />
            </CheckBoxContainer>
            <PrayerTextContainer>
              <StyledPrayerText
                style={
                  toggleCheckBox && { textDecorationLine: 'line-through' }
                }>
                {PrayerTextHelper.getSlicePrayerText(props.data.title)}
              </StyledPrayerText>
            </PrayerTextContainer>
          </StyledGroupContainer>
          <StyledGroupContainer>
            <TouchableOpacity
              onPress={() => Alert.alert('UserSvgIcon')}
              style={{ marginRight: 20 }}>
              <IvonContainer>
                <View>
                  <UserSvgIcon />
                </View>
                <View>
                  <UserData>3</UserData>
                </View>
              </IvonContainer>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => Alert.alert('PrayerLineSvgIcon')}>
              <IvonContainer>
                <View>
                  <PrayerLineSvgIcon />
                </View>
                <View>
                  <LineData>123</LineData>
                </View>
              </IvonContainer>
            </TouchableOpacity>
          </StyledGroupContainer>
        </StyledContainer>
      </TouchableOpacity>
    </Swipeable>
  );
};
