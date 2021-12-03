import React, { useState } from 'react';
import { ScrollView } from 'react-native-gesture-handler';
import styled from 'styled-components/native';
import { useSelector } from 'react-redux';
import { RootState } from '../redux/configureStore';
import { Text } from 'react-native';
import { PrayerBox } from '../components/Prayer';
import { ScreensWrapper } from '../components/containers';
import { Button } from '../components/ui';

export const SubscribedScreen: React.FC = () => {
  const [toggle, setToggle] = useState(false);

  const subscribed = useSelector(
    (state: RootState) => state.prayers.subscribed,
  );

  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
      <ScreensWrapper>
        {subscribed.length > 0 &&
          subscribed
            .filter((prayer) => prayer.checked === false)
            .map((prayer, index) => <PrayerBox data={prayer} key={index} />)}
        {subscribed.length === 0 && <Text>No subscribed prayers yet...</Text>}
        <BtnWrapper>
          <Button onPress={() => setToggle(!toggle)}>
            {toggle ? 'hide Answered Prayers' : 'Show Answered Prayers'}
          </Button>
        </BtnWrapper>
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
      </ScreensWrapper>
    </ScrollView>
  );
};

export const BtnWrapper = styled.View`
  margin: 21px 0 4px 0;
`;
