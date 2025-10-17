import React from 'react';
import {
  StatusBar,
  useColorScheme
} from 'react-native';
import {
  SafeAreaProvider
} from 'react-native-safe-area-context';
import { ProviderNotificationContextComponent } from './src/contexts/notificationContext';
import { PaperProvider } from 'react-native-paper';
import { ProviderCrashlyticsContextComponent } from './src/contexts/crashLyticsContext';
import HomeScreen from './src/screens/home/HomeScreen';

const App = () => {

  const isDarkMode = useColorScheme() === 'dark';


  return (
    <PaperProvider>
      <ProviderCrashlyticsContextComponent>
        <ProviderNotificationContextComponent>
          <SafeAreaProvider>
            <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
            <HomeScreen />
          </SafeAreaProvider>
        </ProviderNotificationContextComponent>
      </ProviderCrashlyticsContextComponent>
    </PaperProvider>
  );
}

export default App;