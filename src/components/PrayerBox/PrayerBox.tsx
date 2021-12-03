import { useNavigation } from '@react-navigation/core';
import { StackNavigationProp } from '@react-navigation/stack';
import React, { useRef } from 'react';
import { TouchableOpacity, Alert, View, ActivityIndicator } from 'react-native';
import Swipeable from 'react-native-gesture-handler/Swipeable';
import { CheckBox } from 'react-native-elements';
import { PrayerLineSvgIcon } from '../../../assets/icons/PrayerLineSvgIcon';
import { StateSvgIcon } from '../../../assets/icons/StateSvgIcon';
import { UserSvgIcon } from '../../../assets/icons/UserSvgIcon';
import { PrayerTextHelper } from '../../helpers/TextHelper';
import { MainStackParamList } from '../../navigation/Navigator';
import {
  IPrayer,
  removePrayer,
  upDatePrayer,
} from '../../redux/ducks/prayer/prayerSlice';
import {
  StyledDeleteBtn,
  StyledGroupContainer,
  StyledContainer,
  StyledText,
  StyledPrayerText,
  IconContainer,
  UserData,
  LineData,
  StateIconContainer,
  PrayerTextContainer,
  CheckBoxContainer,
  StyledContainerWrapper,
} from './styles';
import { CheckedSvgIcon } from '../../../assets/icons/CheckedSvgIcon';
import { UnCheckedSvgIcon } from '../../../assets/icons/UnCheckedSvgIcon';
import { Colors } from '../../styles/Colors';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../redux/configureStore';

type PrayerBoxProp = StackNavigationProp<MainStackParamList, 'Detail'>;

type PrayerBoxType = {
  data: IPrayer;
  index?: number;
};

export const PrayerBox: React.FC<PrayerBoxType> = (props) => {
  const navigate = useNavigation<PrayerBoxProp>();
  const dispatch = useDispatch();
  const token = useSelector((state: RootState) => state.auth.token);

  const updateLoading = useSelector(
    (state: RootState) => state.prayers.updateLoading,
  );

  const updatePrayerId = useSelector(
    (state: RootState) => state.prayers.updatePrayerId,
  );

  const swippleRef = useRef<Swipeable>(null);

  const rightSwipe = () => {
    return (
      <TouchableOpacity
        onPress={() => {
          swippleRef!.current!.close();
          setTimeout(() => {
            dispatch(removePrayer({ token, id: props.data.id }));
          });
        }}
        activeOpacity={0.8}>
        <StyledDeleteBtn>
          <StyledText>Delete</StyledText>
        </StyledDeleteBtn>
      </TouchableOpacity>
    );
  };

  return (
    <Swipeable renderRightActions={rightSwipe} ref={swippleRef}>
      <TouchableOpacity
        onPress={() =>
          navigate.navigate('Detail', {
            id: props.data.id,
          })
        }>
        <StyledContainerWrapper>
          <StyledContainer
            style={
              props.index === 0 && {
                borderTopColor: Colors.mercury,
                borderTopWidth: 1,
              }
            }>
            <StyledGroupContainer>
              <StateIconContainer>
                <StateSvgIcon
                  color={
                    props.data.id % 2 === 0
                      ? Colors.roseVale
                      : props.data.id % 3 === 0
                      ? Colors.moonstoneBlue
                      : Colors.rodeoDust
                  }
                />
              </StateIconContainer>
              <CheckBoxContainer>
                <CheckBox
                  onPress={() => {
                    dispatch(
                      upDatePrayer({
                        token,
                        checked: !props.data.checked,
                        title: props.data.title,
                        id: props.data.id,
                        description: props.data.description,
                      }),
                    );
                  }}
                  checkedIcon={
                    updateLoading && updatePrayerId === props.data.id ? (
                      <ActivityIndicator size="small" color={Colors.liver} />
                    ) : (
                      <CheckedSvgIcon />
                    )
                  }
                  uncheckedIcon={
                    updateLoading && updatePrayerId === props.data.id ? (
                      <ActivityIndicator size="small" color={Colors.liver} />
                    ) : (
                      <UnCheckedSvgIcon />
                    )
                  }
                  checked={props.data.checked}
                />
              </CheckBoxContainer>
              <PrayerTextContainer>
                <StyledPrayerText
                  style={
                    props.data.checked && { textDecorationLine: 'line-through' }
                  }>
                  {PrayerTextHelper.getSlicePrayerText(props.data.title)}
                </StyledPrayerText>
              </PrayerTextContainer>
            </StyledGroupContainer>
            <StyledGroupContainer>
              <TouchableOpacity
                onPress={() => Alert.alert('UserSvgIcon')}
                style={{ marginRight: 20 }}>
                <IconContainer>
                  <View>
                    <UserSvgIcon />
                  </View>
                  <View>
                    <UserData>3</UserData>
                  </View>
                </IconContainer>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => Alert.alert('PrayerLineSvgIcon')}>
                <IconContainer>
                  <View>
                    <PrayerLineSvgIcon />
                  </View>
                  <View>
                    <LineData>123</LineData>
                  </View>
                </IconContainer>
              </TouchableOpacity>
            </StyledGroupContainer>
          </StyledContainer>
        </StyledContainerWrapper>
      </TouchableOpacity>
    </Swipeable>
  );
};
