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
  IvonContainer,
  UserData,
  LineData,
  StateIvonContainer,
  PrayerTextContainer,
  CheckBoxContainer,
  StyledContainerWrapp,
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

  const swipeableRef = useRef<Swipeable>(null);

  const rightSwipe = () => {
    return (
      <TouchableOpacity
        onPress={() => {
          swipeableRef!.current!.close();
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
    <Swipeable renderRightActions={rightSwipe} ref={swipeableRef}>
      <TouchableOpacity
        onPress={() =>
          navigate.navigate('Detail', {
            id: props.data.id,
          })
        }>
        <StyledContainerWrapp>
          <StyledContainer
            style={
              props.index === 0 && {
                borderTopColor: Colors.mercury,
                borderTopWidth: 1,
              }
            }>
            <StyledGroupContainer>
              <StateIvonContainer>
                <StateSvgIcon
                  color={
                    props.data.id % 2 === 0
                      ? Colors.roseVale
                      : props.data.id % 3 === 0
                      ? Colors.moonstoneBlue
                      : Colors.rodeoDust
                  }
                />
              </StateIvonContainer>
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
                <IvonContainer>
                  <View>
                    <UserSvgIcon />
                  </View>
                  <View>
                    <UserData>3</UserData>
                  </View>
                </IvonContainer>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => Alert.alert('PrayerLineSvgIcon')}>
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
        </StyledContainerWrapp>
      </TouchableOpacity>
    </Swipeable>
  );
};
