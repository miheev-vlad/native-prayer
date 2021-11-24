import React from 'react';
import { ScrollView } from 'react-native-gesture-handler';
import { Comments } from '../components/Prayer/Comments';
import { Members } from '../components/Prayer/Members';
import { PrayerData } from '../components/Prayer/PrayerData';
import { PrayerDetailWrapp } from '../components/Prayer/PrayerDetailWrapp';
import { PrayerTitle } from '../components/Prayer/PrayerTitle';
import { Table } from '../components/Prayer/Table';

export const DetailPrayerScreen: React.FC = () => {
  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
      <PrayerDetailWrapp>
        <PrayerTitle>
          Prayer item two which is for my family to love God whole heartedly.
        </PrayerTitle>
        <PrayerData>Last prayed 8 min ago</PrayerData>
        <Table />
        <Members />
        <Comments />
      </PrayerDetailWrapp>
    </ScrollView>
  );
};
