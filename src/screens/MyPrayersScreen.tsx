import React, { useState } from 'react';
import { Field, Form } from 'react-final-form';
import { Alert, ScrollView } from 'react-native';
import { useSelector } from 'react-redux';
import styled from 'styled-components/native';
import { BigAddSvgIcon } from '../../assets/icons/BigAddSvgIcon';
import { AddPrayerInput } from '../components/AddPrayerInput';
import { OvalButton } from '../components/OvalButton';
import { PrayerBox } from '../components/PrayerBox/PrayerBox';
import { ScreensWrapp } from '../components/ScreensWrapp';
import { RootState } from '../redux/configureStore';

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
  const prayers = useSelector((state: RootState) => state.prayers.prayers);

  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
      <ScreensWrapp>
        <Form
          onSubmit={(values: IValues, form) => {
            Alert.alert(JSON.stringify(values));
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
        {prayers
          .filter((prayer) => prayer.checked === false)
          .map((prayer, index) => (
            <PrayerBox
              data={prayer}
              handleDelete={() => Alert.alert('Deleted...')}
              key={index}
            />
          ))}
        <OvalBtnWrapp>
          <OvalButton onPress={() => setToggle(!toggle)}>
            {toggle ? 'hide Answered Prayers' : 'Show Answered Prayers'}
          </OvalButton>
        </OvalBtnWrapp>
        {toggle &&
          prayers
            .filter((prayer) => prayer.checked === true)
            .map((prayer, index) => (
              <PrayerBox
                index={index}
                data={prayer}
                handleDelete={() => Alert.alert('Deleted...')}
                key={index}
              />
            ))}
      </ScreensWrapp>
    </ScrollView>
  );
};
