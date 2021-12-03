import _ from 'lodash';
import { createSelector } from 'reselect';
import { RootState } from '../../configureStore';

const allPrayers = (state: RootState) => state.prayers.prayerObjects;

function filterPrayerById(columnId: number, checked: boolean) {
  return createSelector(allPrayers, (prayerObjects) => {
    if (prayerObjects) {
      return _.filter(
        Object.keys(prayerObjects).map((key) => prayerObjects[key]),
        (item) => {
          return item.columnId === columnId && item.checked === checked;
        },
      );
    } else {
      return [];
    }
  });
}

export default filterPrayerById;
