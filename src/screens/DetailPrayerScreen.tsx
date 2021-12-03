import { RouteProp, useRoute } from '@react-navigation/core';
import React, { useEffect } from 'react';
import { ActivityIndicator } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { useDispatch, useSelector } from 'react-redux';
import { Comments } from '../components/Prayer/Comments';
import { Members } from '../components/Prayer/Members';
import { PrayerData } from '../components/Prayer/PrayerData';
import { PrayerDetailWrapp } from '../components/Prayer/PrayerDetailWrapp';
import { PrayerTitle } from '../components/Prayer/PrayerTitle';
import { Table } from '../components/Prayer/Table';
import { MainStackParamList } from '../navigation/Navigator';
import { RootState } from '../redux/configureStore';
import { getAllComments } from '../redux/ducks/coments/commentsSlice';
import { getPrayerById } from '../redux/ducks/prayer/prayerSlice';
import { Colors } from '../styles/Colors';

export const DetailPrayerScreen: React.FC = () => {
  const token = useSelector((state: RootState) => state.auth.token);
  const route = useRoute<RouteProp<MainStackParamList, 'Detail'>>();
  const id = route.params.id;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPrayerById({ token, id }));
    dispatch(getAllComments({ token }));
  }, [dispatch, id, token]);

  const currentPrayer = useSelector(
    (state: RootState) => state.prayers.currentPrayer,
  );

  const loading = useSelector((state: RootState) => state.comments.loading);

  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
      <PrayerDetailWrapp>
        <PrayerTitle>
          {currentPrayer ? (
            currentPrayer?.title
          ) : (
            <ActivityIndicator size="small" color={Colors.white} />
          )}
        </PrayerTitle>
        <PrayerData>Last prayed 8 min ago</PrayerData>
        <Table />
        <Members />
        <Comments
          id={id}
          commentsIds={currentPrayer?.commentsIds || []}
          loading={loading}
          token={token}
        />
      </PrayerDetailWrapp>
    </ScrollView>
  );
};
