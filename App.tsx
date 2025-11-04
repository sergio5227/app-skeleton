import React from 'react';
import {
  StatusBar,
  useColorScheme,
  View,
  ActivityIndicator
} from 'react-native';
import {
  SafeAreaProvider,
  useSafeAreaInsets
} from 'react-native-safe-area-context';
import { Provider } from 'react-redux';
import { ProviderNotificationContextComponent } from './src/contexts/notificationContext';
import { PaperProvider } from 'react-native-paper';
import { ProviderCrashlyticsContextComponent } from './src/contexts/crashLyticsContext';
import HomeScreen from './src/screens/home/HomeScreen';



import { PersistGate } from "redux-persist/integration/react";
import { store, persistor } from './src/store/index';

const App = () => {

  const isDarkMode = useColorScheme() === 'dark';


  return (
    <SafeAreaProvider>
      <View style={{ flex: 1 }}>
        <PaperProvider>

          <ProviderCrashlyticsContextComponent>
            <ProviderNotificationContextComponent>
              <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
              <Provider store={store}>
                <PersistGate
                  loading={
                    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
                      <ActivityIndicator size="large" color="#000" />
                    </View>
                  }
                  persistor={persistor}
                >

                  <HomeScreen />
                </PersistGate>
              </Provider>
            </ProviderNotificationContextComponent>
          </ProviderCrashlyticsContextComponent>

        </PaperProvider>
      </View>
    </SafeAreaProvider >
  );
}

export default App;