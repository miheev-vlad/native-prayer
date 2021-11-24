import React, { useState } from 'react';
import { Alert } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import styled from 'styled-components/native';
import { useSelector } from 'react-redux';
import { OvalButton } from '../components/OvalButton';
import { PrayerBox } from '../components/PrayerBox';
import { ScreensWrapp } from '../components/ScreensWrapp';
import { RootState } from '../redux/configureStore';

export const OvalBtnWrapp = styled.View`
  margin: 21px 0 4px 0;
`;

export const SubscribedScreen: React.FC = () => {
  const [toggle, setToggle] = useState(false);
  const prayers = useSelector((state: RootState) => state.prayers.prayers);

  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
      <ScreensWrapp>
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
