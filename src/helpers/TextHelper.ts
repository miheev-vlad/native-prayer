export class PrayerTextHelper {
  static getSlicePrayerText = (title: string) => {
    return title.substr(0, 15) + '...';
  };
}
