import React from 'react';
import {
  StatusBar,
  useColorScheme,
  View,
  ActivityIndicator
} from 'react-native';
import {
  SafeAreaProvider,
  SafeAreaView
} from 'react-native-safe-area-context';
import { Provider } from 'react-redux';
import { ProviderNotificationContextComponent } from './src/contexts/notificationContext';
import { PaperProvider } from 'react-native-paper';
import { ProviderCrashlyticsContextComponent } from './src/contexts/crashLyticsContext';
import { PersistGate } from "redux-persist/integration/react";
import { store, persistor } from './src/store/index';
import { NavigationContainer } from '@react-navigation/native';
import MainNavigator from './src/navigators/mainNavigator/mainNavigator';

const App = () => {

  const isDarkMode = useColorScheme() === 'dark';

  return (
    <SafeAreaProvider>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor="transparent"
      />
      <SafeAreaView style={{
        flex: 1,
        borderRadius: 16,
        backgroundColor: 'white'
      }}>
        <PaperProvider>
          <ProviderCrashlyticsContextComponent>
            <ProviderNotificationContextComponent>
              <Provider store={store}>
                <PersistGate
                  loading={
                    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
                      <ActivityIndicator size="large" color="#000" />
                    </View>
                  }
                  persistor={persistor}
                >
                  <NavigationContainer>
                    <MainNavigator />
                  </NavigationContainer>
                </PersistGate>
              </Provider>
            </ProviderNotificationContextComponent>
          </ProviderCrashlyticsContextComponent>
        </PaperProvider>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

export default App;