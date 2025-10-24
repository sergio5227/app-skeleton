import React from 'react';
import {
  StatusBar,
  useColorScheme,
  View
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
    <SafeAreaProvider>
      <View style={{ flex: 1,  marginTop:40 }}>
        <PaperProvider >
          <ProviderCrashlyticsContextComponent >
            <ProviderNotificationContextComponent >
              <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
              <HomeScreen />
            </ProviderNotificationContextComponent>
          </ProviderCrashlyticsContextComponent>
        </PaperProvider>
      </View>
    </SafeAreaProvider>
  );
}

export default App;