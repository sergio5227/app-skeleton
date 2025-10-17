import React from 'react';
import {
  StatusBar,
  Text,
  useColorScheme,
  View
} from 'react-native';
import {
  SafeAreaProvider
} from 'react-native-safe-area-context';
import { ProviderNotificationContextComponent } from './src/contexts/notificationContext';
import { PaperProvider } from 'react-native-paper';
import { ProviderCrashLyticsContextComponent } from './src/contexts/crashLyticsContext';

const App = () => {

  const isDarkMode = useColorScheme() === 'dark';
 
  return (
    <PaperProvider>
      <ProviderCrashLyticsContextComponent>
      <ProviderNotificationContextComponent>
        <SafeAreaProvider>
          <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
          <View style={{ marginTop: 50 }}>
            <Text>App esqueleto</Text>
          </View>
        </SafeAreaProvider>
      </ProviderNotificationContextComponent>
      </ProviderCrashLyticsContextComponent>
    </PaperProvider>
  );
}

export default App;