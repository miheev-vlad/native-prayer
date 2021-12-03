import { RouteProp, useRoute } from '@react-navigation/core';
import React, { useEffect, useState } from 'react';
import { Field, Form } from 'react-final-form';
import { ActivityIndicator, ScrollView, Text } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components/native';
import { BigAddSvgIcon } from '../../assets/icons/BigAddSvgIcon';
import { RootState } from '../redux/configureStore';
import { createPrayer, getColumnById } from '../redux/ducks/column/columnSlice';
import { MainStackParamList } from '../navigation/Navigator';
import { getAllPrayers } from '../redux/ducks/prayer/prayerSlice';
import { Colors } from '../styles/Colors';
import { prayerSelector } from '../redux/ducks/prayer';
import { DropsDownMenu, ModalWindow } from '../components';
import { PrayerBox } from '../components/Prayer';
import { ScreensWrapper } from '../components/containers';
import { AddPrayerInput, Button } from '../components/ui';

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
      <DropsDownMenu id={id} isShowMenu={isShowMenu} />
      <ModalWindow id={id} isUpdate={true} />
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <ScreensWrapper>
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
              <FormWrapper>
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
              </FormWrapper>
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
          <BtnWrapper>
            <Button onPress={() => setToggle(!toggle)}>
              {toggle ? 'hide Answered Prayers' : 'Show Answered Prayers'}
            </Button>
          </BtnWrapper>
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
        </ScreensWrapper>
      </ScrollView>
    </React.Fragment>
  );
};

export const FormWrapper = styled.View`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const IconContainer = styled.TouchableOpacity`
  position: absolute;
  top: 17px;
  left: 20px;
`;

export const BtnWrapper = styled.View`
  margin: 21px 0 4px 0;
`;
