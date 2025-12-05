import React, { useEffect } from 'react';
import {
  StatusBar,
  useColorScheme,
  View,
  ActivityIndicator,
  PermissionsAndroid,
  Platform
} from 'react-native';
import {
  SafeAreaProvider,
  SafeAreaView
} from 'react-native-safe-area-context';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { Provider, useSelector } from 'react-redux';
import { ProviderNotificationContextComponent } from './src/contexts/notificationContext';
import { PaperProvider } from 'react-native-paper';
import { ProviderCrashlyticsContextComponent } from './src/contexts/crashLyticsContext';
import { BottomSheetProvider } from './src/contexts/bottomSheetContext';
import { PersistGate } from "redux-persist/integration/react";
import { store, persistor } from './src/store/index';
import { NavigationContainer } from '@react-navigation/native';
import DrawerNavigator from './src/navigators/DrawerNavigator/drawerNavigator';
import Orientation from 'react-native-orientation-locker';


const App = () => {

  useEffect(() => {
    Orientation.lockToPortrait();
  }, []);

  return (
    <Provider store={store}>
      <PersistGate
        loading={<LoadingView />}
        persistor={persistor}
      >
        <AppContent />
      </PersistGate>
    </Provider>
  );
};


const AppContent = () => {
  const isDarkMode = useColorScheme() === 'dark';
  const theme = useSelector((state: any) => state?.app?.theme || '#fff');

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <SafeAreaProvider>
        <BottomSheetProvider>
          <StatusBar
            barStyle={isDarkMode ? 'light-content' : 'dark-content'}
            backgroundColor="transparent"
          />
          <SafeAreaView style={{
            flex: 1,
            borderRadius: 16,
            backgroundColor: theme
          }}>
            <PaperProvider>
              <ProviderCrashlyticsContextComponent>
                <ProviderNotificationContextComponent>
                  <NavigationContainer>
                    <DrawerNavigator />
                  </NavigationContainer>
                </ProviderNotificationContextComponent>
              </ProviderCrashlyticsContextComponent>
            </PaperProvider>
          </SafeAreaView>
        </BottomSheetProvider>
      </SafeAreaProvider>
    </GestureHandlerRootView>
  );
};

const LoadingView = () => (
  <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
    <ActivityIndicator size="large" color="#000" />
  </View>
);


export default App;