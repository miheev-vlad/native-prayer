import { RouteProp, useRoute } from '@react-navigation/core';
import React, { useEffect, useState } from 'react';
import { Field, Form } from 'react-final-form';
import { ActivityIndicator, ScrollView, Text } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components/native';
import { BigAddSvgIcon } from '../../assets/icons/BigAddSvgIcon';
import { AddPrayerInput } from '../components/AddPrayerInput';
import { OvalButton } from '../components/OvalButton';
import { PrayerBox } from '../components/PrayerBox/PrayerBox';
import { ScreensWrapp } from '../components/ScreensWrapp';
import { RootState } from '../redux/configureStore';
import { createPrayer, getColumnById } from '../redux/ducks/column/columnSlice';
import { MainStackParamList } from '../navigation/Navigator';
import { DroppDownMenu } from '../components/DroppDownMenu';
import { ModalWindow } from '../components/ModalWindow';
import { getAllPrayers } from '../redux/ducks/prayer/prayerSlice';
import { Colors } from '../styles/Colors';
import { prayerSelector } from '../redux/ducks/prayer';

export const FormWrapp = styled.View`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const IconContainer = styled.TouchableOpacity`
  position: absolute;
  top: 17px;
  left: 20px;
`;

export const OvalBtnWrapp = styled.View`
  margin: 21px 0 4px 0;
`;

export interface IValues {
  prayer: string;
}

export const MyPrayersScreen: React.FC = () => {
  const [toggle, setToggle] = useState(false);
  const token = useSelector((state: RootState) => state.auth.token);
  const dispatch = useDispatch();
  const route = useRoute<RouteProp<MainStackParamList, 'Column'>>();
  const isShowMenu = useSelector((state: RootState) => state.modal.isShowMenu);
  const id = route.params.id;

  useEffect(() => {
    dispatch(getColumnById({ token, id }));
    dispatch(getAllPrayers({ token }));
  }, [dispatch, token, id]);

  const checkedPrayers = useSelector(prayerSelector(id, true));
  const unCheckedPrayers = useSelector(prayerSelector(id, false));

  const isPrayersLoading = useSelector(
    (state: RootState) => state.prayers.loading,
  );

  return (
    <React.Fragment>
      <DroppDownMenu id={id} isShowMenu={isShowMenu} />
      <ModalWindow id={id} isUpdate={true} />
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <ScreensWrapp>
          <Form
            onSubmit={(values: IValues, form) => {
              dispatch(
                createPrayer({
                  token,
                  title: values.prayer,
                  description: '',
                  checked: false,
                  id,
                }),
              );
              form.reset();
              form.resetFieldState('prayer');
            }}
            render={({ form }) => (
              <FormWrapp>
                <Field<string>
                  name="prayer"
                  placeholder="Add a prayer..."
                  component={AddPrayerInput}
                  validate={(v: string) =>
                    v ? undefined : 'Please Enter a Prayer'
                  }
                />
                <IconContainer onPress={form.submit}>
                  <BigAddSvgIcon />
                </IconContainer>
              </FormWrapp>
            )}
          />
          {isPrayersLoading && (
            <ActivityIndicator size="small" color={Colors.moonstoneBlue} />
          )}
          {!isPrayersLoading &&
            unCheckedPrayers.length > 0 &&
            unCheckedPrayers
              .filter((prayer) => prayer.checked === false)
              .map((prayer, index) => <PrayerBox data={prayer} key={index} />)}
          {!isPrayersLoading && unCheckedPrayers.length === 0 && (
            <Text>No prayers yet...</Text>
          )}
          <OvalBtnWrapp>
            <OvalButton onPress={() => setToggle(!toggle)}>
              {toggle ? 'hide Answered Prayers' : 'Show Answered Prayers'}
            </OvalButton>
          </OvalBtnWrapp>
          {!isPrayersLoading &&
            toggle &&
            checkedPrayers.length > 0 &&
            checkedPrayers
              .filter((prayer) => prayer.checked === true)
              .map((prayer, index) => (
                <PrayerBox index={index} data={prayer} key={index} />
              ))}
          {!isPrayersLoading && toggle && checkedPrayers.length === 0 && (
            <Text>No prayers yet...</Text>
          )}
          {isPrayersLoading && toggle && (
            <ActivityIndicator size="small" color={Colors.moonstoneBlue} />
          )}
        </ScreensWrapp>
      </ScrollView>
    </React.Fragment>
  );
};
