export class PrayerTextHelper {
  static getSlicePrayerText = (title: string) => {
    if (title.length > 15) {
      return title.substr(0, 15) + '...';
    } else {
      return title;
    }
  };
}
