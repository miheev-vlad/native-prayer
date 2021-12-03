import React, { useState } from 'react';
import { ScrollView } from 'react-native-gesture-handler';
import styled from 'styled-components/native';
import { useSelector } from 'react-redux';
import { OvalButton } from '../components/OvalButton';
import { PrayerBox } from '../components/PrayerBox';
import { ScreensWrapp } from '../components/ScreensWrapp';
import { RootState } from '../redux/configureStore';
import { Text } from 'react-native';

export const OvalBtnWrapp = styled.View`
  margin: 21px 0 4px 0;
`;

export const SubscribedScreen: React.FC = () => {
  const [toggle, setToggle] = useState(false);

  const subscribed = useSelector(
    (state: RootState) => state.prayers.subscribed,
  );

  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
      <ScreensWrapp>
        {subscribed.length > 0 &&
          subscribed
            .filter((prayer) => prayer.checked === false)
            .map((prayer, index) => <PrayerBox data={prayer} key={index} />)}
        {subscribed.length === 0 && <Text>No subscribed prayers yet...</Text>}
        <OvalBtnWrapp>
          <OvalButton onPress={() => setToggle(!toggle)}>
            {toggle ? 'hide Answered Prayers' : 'Show Answered Prayers'}
          </OvalButton>
        </OvalBtnWrapp>
        {toggle &&
          subscribed.length > 0 &&
          subscribed
            .filter((prayer) => prayer.checked === true)
            .map((prayer, index) => (
              <PrayerBox index={index} data={prayer} key={index} />
            ))}
        {toggle && subscribed.length === 0 && (
          <Text>No subscribed prayers yet...</Text>
        )}
      </ScreensWrapp>
    </ScrollView>
  );
};
