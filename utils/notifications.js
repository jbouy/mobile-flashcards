import moment from 'moment';
import { AsyncStorage } from 'react-native';
import { Notifications, Permissions } from 'expo';

const NOTIFICATION_KEY = 'Flashcards:study:notification';

function createNotification() {
  return {
    title: 'Time to Study',
    body: "Don't forget to complete one of your flash card quizzes for today!",
    ios: {
      sound: true,
    },
    android: {
      sound: true,
      priority: 'high',
      sticky: false,
      vibrate: true,
    },
  };
}

export async function clearLocalNotification() {
  await AsyncStorage.removeItem(NOTIFICATION_KEY);

  return Notifications.cancelAllScheduledNotificationsAsync();
}

export async function setLocalNotification() {
  const data = JSON.parse(await AsyncStorage.getItem(NOTIFICATION_KEY));

  if (data) return;

  const { status } = await Permissions.askAsync(Permissions.NOTIFICATIONS);

  if (status === 'granted') {
    await clearLocalNotification();

    const tomorrow = moment().add(1, 'days');
    tomorrow.set('hours', 18);
    tomorrow.set('minutes', 0);

    await Notifications.scheduleLocalNotificationAsync(createNotification(), {
      time: tomorrow.toDate(),
      repeat: 'day',
    });

    await AsyncStorage.setItem(NOTIFICATION_KEY, JSON.stringify(true));
  }
}
