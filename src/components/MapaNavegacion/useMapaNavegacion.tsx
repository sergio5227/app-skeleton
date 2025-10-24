import { useEffect, useRef, useState } from 'react';
import { PermissionsAndroid, Platform } from 'react-native';
import MapView from 'react-native-maps';
import Geolocation from 'react-native-geolocation-service';
import Tts from 'react-native-tts';
import { compararCoordenadas } from '../../utils/utils';

Tts.setDefaultLanguage('es-MX');
Tts.setDucking(true); // baja el volumen de otras
Tts.setDefaultRate(0.45);

const useMapaNavegacion = () => {

    const mapRef = useRef<MapView>(null);
    const [origen, setOrigen] = useState<any>(null);
    const [currentInstruction, setCurrentInstruction] = useState<string>('');
    const [instrucciones, setInstrucciones] = useState<any[]>([]);
    const [indicePaso, setIndicePaso] = useState(0);
    const [heading, setHeading] = useState(0);


    useEffect(() => {
        const watchId = Geolocation.watchPosition(
            (position: any) => {
                const coords = {
                    latitude: position.coords.latitude,
                    longitude: position.coords.longitude,
                };
                const validaCambio = compararCoordenadas(coords, origen);
                if (!validaCambio?.iguales) {
                    setOrigen(coords);
                    if (position.coords?.heading >= 0) {
                        setHeading(position.coords?.heading)
                    };
                }
                console.log('*', new Date().getMinutes())
            },
            (error: any) => {
                console.log(error)
            },
            {
                enableHighAccuracy: true,
                distanceFilter: 15, // menos updates = menos CPU
                interval: 7000,
                fastestInterval: 5000,
            }
        );
        return () => Geolocation.clearWatch(watchId);
    }, []);

    // Solicitar permisos
    useEffect(() => {
        const solicitarPermisos = async () => {
            if (Platform.OS === 'android') {
                const granted = await PermissionsAndroid.request(
                    PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION
                );
                if (granted !== PermissionsAndroid.RESULTS.GRANTED) {
                    console.log('Permiso de ubicación denegado');
                    return;
                }
            }
        };
        solicitarPermisos();
    }, []);

    // Manejador cuando se carga la ruta
    const onReady = async (result: any) => {
        if (!result?.legs?.[0]?.steps) return;
        setIndicePaso(0);
        const pasos = result.legs[0].steps;
        setInstrucciones(pasos);

        const primera = pasos[0]?.html_instructions?.replace(/<[^>]+>/g, '') ?? '';
        if (!primera) return;

        const textoNormalizado = primera.toLowerCase().trim();
        const textoActual = currentInstruction.toLowerCase().trim();

        if (textoNormalizado !== textoActual ) {
            setCurrentInstruction(primera);
            await Tts.stop();
            Tts.speak(primera);
        }

        if (textoNormalizado === textoActual ) {
            Tts.speak(`Continua por la ruta mencionada`);
        }

        mapRef.current?.animateCamera({
            center: result?.legs[0]?.start_location ?? origen,
            zoom: 18,
            pitch: 60,
            heading,
        });
    };

    return {
        origen,
        mapRef,
        onReady,
        instrucciones,
        indicePaso,
        heading
    }
}
export default useMapaNavegacion;