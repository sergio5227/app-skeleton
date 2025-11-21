import { configureStore } from "@reduxjs/toolkit";
import { persistReducer, persistStore } from "redux-persist";
import AsyncStorage from "@react-native-async-storage/async-storage";
import rootReducer from "../reducers/appReducer";


// Configuración de persistencia
const persistConfig = {
  key: "root",
  storage: AsyncStorage,
  whitelist: ["app"], // reducers que se nececiten
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

// Configuración del store
export const store = configureStore({
  reducer: persistedReducer,
  devTools: true,
});

// Persistor (necesario para redux-persist)
export const persistor = persistStore(store);

// Tipos
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
