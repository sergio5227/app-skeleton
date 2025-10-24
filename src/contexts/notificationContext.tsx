import React, {
    useContext,
    useEffect,
    useState
} from 'react';
import messaging from '@react-native-firebase/messaging';
import CustomAlert from '../components/CustomDialog/CustomDialog';
import { CrashlyticsContext } from './crashLyticsContext';

export const notificationContext = React.createContext(null);

export const ProviderNotificationContextComponent: any = ({ children }: any) => {

    const crashLytics = useContext(CrashlyticsContext);

    const [title, setTitle] = useState('');
    const [message, setMessage] = useState('');
    const [open, setOpen] = useState(false);

    useEffect(() => {
        requestUserPermission();
        // Foreground (app abierta)
        const unsubscribe = messaging().onMessage(async (remoteMessage: any) => {
            setTitle(remoteMessage.notification?.title);
            setMessage(remoteMessage.notification?.body);
            setOpen(true);
        });
        // Background (cuando el user toca la notificación y la app estaba en segundo plano)
        const unsubscribeBackground = messaging().onNotificationOpenedApp(
            (remoteMessage: any) => {
                console.log('Notificación abrió la app (background):', remoteMessage);
                setTitle(remoteMessage.notification?.title);
                setMessage(remoteMessage.notification?.body);
                setOpen(true);
                // aquí podrías navegar a una pantalla
            }
        );
        //app cerrada y se abre por la notificación
        messaging()
            .getInitialNotification()
            .then((remoteMessage: any) => {
                if (remoteMessage) {
                    console.log('App iniciada por notificación (cerrada):', remoteMessage);
                    setTitle(remoteMessage.notification?.title);
                    setMessage(remoteMessage.notification?.body);
                    setOpen(true);
                }
            });
        return () => {
            unsubscribe();
            unsubscribeBackground();
        };
    }, []);

    // Obtener el token único del dispositivo
    const getFcmToken = async () => {
        try {
            const token = await messaging().getToken();
            console.log('FCM Token para enviar al backend para que guarde el dispositivo en BD:', token);
        } catch (error) {
            crashLytics?.setLogControlledCrashlytics('Error al obtener el token de messaging firebase' + error, '00001', 'notificacion context')
            console.log('Error al obtener token:', error);
        }
    }

    // Pedir permisos en iOS, en Android solo registra
    const requestUserPermission = async () => {
        const authStatus = await messaging().requestPermission();
        const enabled =
            authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
            authStatus === messaging.AuthorizationStatus.PROVISIONAL;
        if (enabled) {
            console.log('Permisos habilitados', authStatus);
            getFcmToken();
        } else {
            setTitle('Permisos para las notificaciones deshabilitados');
            setMessage('Por favor habilite las notificaciones para esta app, de lo contrario podra perderse de información vital para su desempeño');
            setOpen(true);
        }
    }

    return (
        <notificationContext.Provider value={null}>
            {children}
            <CustomAlert
                title={title}
                mesage={message}
                open={open}
                onCloseX={() => setOpen(false)}
                onClose={() => setOpen(false)}
                onAcept={() => setOpen(false)}
            />
        </notificationContext.Provider>
    );
}