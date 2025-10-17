import React, {
  createContext,
  FC,
  ReactNode,
  useMemo,
  useCallback,
  useEffect
} from 'react';
import {
  getCrashlytics,
  recordError,
  setAttribute,
  log
} from '@react-native-firebase/crashlytics';

/**
 * Props del Provider
 */
interface ProviderCrashlyticsContextProps {
  children: ReactNode;
}

/**
 * Definición de las funciones del contexto
 */
interface CrashlyticsContextValue {
  setLogControlledCrashlytics: (title: string, userId?: string, pantalla?: string) => Promise<void>;
  logError: (error: unknown, contextInfo?: Record<string, any>) => void;
}

export const CrashlyticsContext = createContext<CrashlyticsContextValue | null>(null);

export const ProviderCrashlyticsContextComponent: FC<ProviderCrashlyticsContextProps> = ({ children }) => {
  const crashlytics = getCrashlytics();
  const isDev = __DEV__; // para evitar mandar errores en desarrollo

  /**
   * Función genérica para registrar errores controlados
   */
  const logError = useCallback( (error: unknown, contextInfo: Record<string, any> = {}) => {
      
    if (isDev) {
        console.log('[Crashlytics:DevLog]', error, contextInfo);
        return;
      }

      const sendError = typeof error === 'string' ? error : JSON.stringify(error);

      const err =
        error instanceof Error
          ? error
          : new Error(sendError);

      const timestamp = new Date().toISOString();

      // Registrar atributos personalizados
      setAttribute(crashlytics, 'timestamp', timestamp);
      Object.entries(contextInfo).forEach(([key, value]) => {
        setAttribute(crashlytics, key, String(value));
      });
      log(crashlytics, `[CustomError]: ${err.message}`);
      recordError(crashlytics, err);
    },
    [crashlytics, isDev]
  );

  /**
   * Método para registrar errores controlados desde cualquier parte de la app
   */
  const setLogControlledCrashlytics = useCallback(
    async (title: string, userId?: string, pantalla?: string): Promise<void> => {
      if (isDev) {
        console.log('[Crashlytics:DevLogControlled]', { title, userId, pantalla });
        return;
      }

      setAttribute(crashlytics, 'user_id', userId || 'unknown');
      setAttribute(crashlytics, 'pantalla', pantalla || 'unknown');
      recordError(crashlytics, new Error(title));
    },
    [crashlytics, isDev]
  );

  /**
   * Captura global de errores JS
   */
  useEffect(() => {
    const defaultHandler = ErrorUtils.getGlobalHandler?.();

    ErrorUtils.setGlobalHandler((error, isFatal) => {
      console.log(' [GlobalHandler] Error capturado:', error?.message);

      logError(error, {
        origen: 'GlobalHandler',
        isFatal,
      });

      // Llamar al handler original si existía
      if (defaultHandler) {
        defaultHandler(error, isFatal);
      }
    });
  }, [logError]);

  const contextValue = useMemo(() => ({ setLogControlledCrashlytics, logError }), [setLogControlledCrashlytics, logError]);
  
  return (
    <CrashlyticsContext.Provider value={contextValue}>
      {children}
    </CrashlyticsContext.Provider>
  );
};
