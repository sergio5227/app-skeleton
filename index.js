/**
 * @format
 */

import { AppRegistry } from 'react-native';
import App from './App';
import { name as appName } from './app.json';
import messaging from '@react-native-firebase/messaging';

// Handler global para cuando llegan notificaciones en background
messaging().setBackgroundMessageHandler(async remoteMessage => {
  console.log('Notificación en background:', remoteMessage);
});

AppRegistry.registerComponent(appName, () => App);
