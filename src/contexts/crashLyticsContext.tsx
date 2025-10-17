import {
    getCrashlytics,
    log,
    recordError,
    setAttribute
} from '@react-native-firebase/crashlytics';
import React, { createContext, FC, ReactNode, useMemo } from 'react';
import { View, Button } from 'react-native';

/**
 * Props por el contexto `operatorLocationContext`.
 */
interface ProviderCrashLyticsContextComponentProps {
    children: ReactNode;
}


/**
 * Definición de las funciones del contexto.
 */
interface CrashLyticsContextValue {
    setLogControlledCrashlytics: (title: string, user_id: string, pantalla: string, modo: string) => Promise<void>;
}

export const crashLyticsContext = createContext<CrashLyticsContextValue | null>(null);

export const ProviderCrashLyticsContextComponent: FC<ProviderCrashLyticsContextComponentProps> = ({ children }: ProviderCrashLyticsContextComponentProps) => {

    const crashlytics = getCrashlytics();
    // Manejar errores no capturados en JS
    ErrorUtils.setGlobalHandler((error, isFatal) => {
        console.log('Capturado por global handler:', error);
        setAttribute(crashlytics, 'user_id', '1234');
        setAttribute(crashlytics, 'pantalla', 'Global handler');
        setAttribute(crashlytics, 'modo', 'Offline');
        setAttribute(crashlytics, 'es_error_fatal', isFatal ? 'Sí' : 'No');
        // Enviar el error a Firebase
        recordError(crashlytics, error);
        recordError(crashlytics, new Error(`Error fatal: ${isFatal ? 'Sí' : 'No'}`));
        // Si quieres que la app se cierre igual:
        if (isFatal) {
            throw error;
        }
    });

    const setLogControlledCrashlytics = async (title: string, user_id: string, pantalla: string, modo: string): Promise<void> => {
        setAttribute(crashlytics, 'user_id', user_id);
        setAttribute(crashlytics, 'pantalla', pantalla);
        setAttribute(crashlytics, 'modo', modo);
        recordError(crashlytics, new Error(title));
    }

    const contextValue = useMemo(() => ({ setLogControlledCrashlytics }), [setLogControlledCrashlytics]);

    return (
        <crashLyticsContext.Provider value={contextValue}>
            {children}
        </crashLyticsContext.Provider>
    );
}