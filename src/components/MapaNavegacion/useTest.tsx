import { useEffect, useMemo, useRef, useState } from 'react';
import { PermissionsAndroid, Platform } from 'react-native';
import MapView from 'react-native-maps';
import Geolocation from 'react-native-geolocation-service';
import Tts from 'react-native-tts';
import haversine from 'haversine-distance';
import polyline from '@mapbox/polyline';
import { compararCoordenadas } from '../../utils/utils';
import { getDireccion } from '../../actions/http/navegacion';
import NetInfo, { addEventListener } from '@react-native-community/netinfo'
import { Destino } from './test';


const DISTANCIA_CAMBIO_STEP = 35; // metros
const DESVIO_MAXIMO = 95; // metros
const GOOGLE_MAPS_APIKEY = 'AIzaSyANkBT5FmnbJhZPrPHYYhGHuS4KocaL3x8';

const useTest = (destino: Destino) => {

    const mapRef = useRef<MapView>(null);
    const [origen, setOrigen] = useState<any>(null);
    const [instrucciones, setInstrucciones] = useState<any[]>([]);
    const [instruccionActual, setInstruccionActual] = useState<string>('');
    const [indicePaso, setIndicePaso] = useState(0);
    const [heading, setHeading] = useState(0);
    const [polylinePoints, setPolylinePoints] = useState<any[]>([]);
    const [enDestino, setEnDestino] = useState(false);
    const [isSwitchOn, setIsSwitchOn] = useState(true);
    const [distance, setDistance] = useState(null);
    const [duration,setDuration] = useState(null);

   /*  const unsubscribe = addEventListener(state => {
        console.log("Connection type", state.type);
        console.log("Is connected?", state.isConnected);
    });

    // Unsubscribe
    unsubscribe(); */

    const onToggleSwitch = async () => {
        if (isSwitchOn) {
            await Tts.stop();
        }
        setIsSwitchOn(!isSwitchOn);
        if (!isSwitchOn) {
            const habla = instrucciones[indicePaso]
                ? instrucciones[indicePaso].html_instructions.replace(/<[^>]+>/g, '')
                : enDestino ? 'Haz llegado a tu destino' : 'Calculando la ruta...'
            speak(habla, 'boton_de_hablar');
        }
    };

    const speak = async (text: string, origen: string) => {
        try {
            if (!isSwitchOn && origen !== 'boton_de_hablar') return;
            setInstruccionActual(text)
            await Tts.setDefaultLanguage('es-MX');
            await Tts.setDucking(true);
            await Tts.stop();
            setTimeout(() => {
                Tts.speak(text);
            }, 300);
        } catch (err) {
            console.log('Error TTS:', err);
        }
    };

    const marcaEnDestino = (valor: boolean) => {
        setEnDestino(valor)
    }

    useEffect(() => {
        const watchId = Geolocation.watchPosition(
            (position: any) => {
                if (position.coords.accuracy > 25) return;
                const coords = {
                    latitude: position.coords.latitude,
                    longitude: position.coords.longitude,
                };
                const cambio = compararCoordenadas(coords, origen);

                const validaEnDestino = compararCoordenadas(coords, destino, 50);

                if (validaEnDestino?.iguales) {
                    marcaEnDestino(true)
                }

                const headingValido = position.coords.heading >= 0 ? position.coords.heading : heading;
                if (mapRef.current) {
                    mapRef.current.animateCamera({
                        center: coords,
                        pitch: 60,
                        zoom: 18,
                        heading: headingValido,
                    }, { duration: 800 });
                }

                if (!cambio?.iguales) {
                    setOrigen(coords);
                    setHeading(headingValido);
                    verificarPaso(coords);
                    verificarDesvio(coords);
                }
            },
            (error) => console.log('Error GPS:', error.message),
            {
                enableHighAccuracy: true,
                distanceFilter: 5,
                interval: 5000,
                fastestInterval: 4000,
            }
        );
        return () => Geolocation.clearWatch(watchId);
    }, [instrucciones, indicePaso]);

    const verificarPaso = (coords: any) => {
        if (!instrucciones.length || indicePaso >= instrucciones.length) return;

        const pasoActual = instrucciones[indicePaso];
        const endActual = {
            latitude: pasoActual.end_location.lat,
            longitude: pasoActual.end_location.lng,
        };

        const distanciaActual = haversine(coords, endActual);

        // Verificar si ya deberías avanzar al siguiente paso
        if (distanciaActual < DISTANCIA_CAMBIO_STEP) {
            avanzarPaso();
            return;
        }

        // Si hay siguiente paso, checa si estás más cerca del siguiente inicio
        if (indicePaso + 1 < instrucciones.length) {
            const siguientePaso = instrucciones[indicePaso + 1];
            const startSiguiente = {
                latitude: siguientePaso.start_location.lat,
                longitude: siguientePaso.start_location.lng,
            };
            const distanciaSiguiente = haversine(coords, startSiguiente);

            if (distanciaSiguiente < DISTANCIA_CAMBIO_STEP) {
                avanzarPaso();
            }
        }
    };

    const avanzarPaso = async () => {
        if (indicePaso + 1 < instrucciones.length && !enDestino) {
            const siguiente = indicePaso + 1;
            setIndicePaso(siguiente);

            const texto = instrucciones[siguiente].html_instructions.replace(/<[^>]+>/g, '');
            speak(texto, 'avanzarPaso'); // usamos la función controlada

            const siguientePos = instrucciones[siguiente].start_location;
            mapRef.current?.animateCamera({
                center: { latitude: siguientePos.lat, longitude: siguientePos.lng },
                zoom: 20,
                pitch: 60,
                heading,
            }, { duration: 1000 });
        } else {
            speak('Has llegado a tu destino', 'avanzarPaso else');
        }
    };

    const verificarDesvio = async (coords: any) => {
        if (!polylinePoints.length) return;

        let distanciaMin = Infinity;
        for (let i = 0; i < polylinePoints.length; i++) {
            const d = haversine(coords, polylinePoints[i]);
            if (d < distanciaMin) distanciaMin = d;
        }

        if (distanciaMin > DESVIO_MAXIMO) {
            speak('Parece que te desviaste de la ruta, recalculando', 'verificarDesvio');
            await recargarRuta();
        }
    };

    const recargarRuta = async () => {
        if (!origen || !instrucciones.length) return;
        const state = await NetInfo.fetch();

        if (!state.isConnected) {
            if (polylinePoints.length > 0) {
                const puntoMasCercano = obtenerPuntoMasCercano(origen, polylinePoints);
                mapRef.current?.animateCamera({
                    center: puntoMasCercano,
                    zoom: 17,
                    pitch: 60,
                    heading
                }, { duration: 1000 });
            }
            return;
        }

        try {
            const destino = instrucciones[instrucciones.length - 1].end_location;
            const response = await getDireccion(
                origen,
                destino,
                GOOGLE_MAPS_APIKEY
            );
            if (response.routes && response.routes.length > 0) {
                onReady(response.routes[0]);
                setTimeout(() => speak('Ruta recalculada', 'recargarRuta'), 800);
            }
        } catch (error) {
            console.log('Error al recalcular ruta:', error);
        }
    };

    const obtenerPuntoMasCercano = (coords: any, puntos: any[]) => {
        let distanciaMin = Infinity;
        let puntoCercano = puntos[0];
        for (let i = 0; i < puntos.length; i++) {
            const d = haversine(coords, puntos[i]);
            if (d < distanciaMin) {
                distanciaMin = d;
                puntoCercano = puntos[i];
            }
        }
        return puntoCercano;
    };

    useEffect(() => {
        const solicitarPermisos = async () => {
            if (Platform.OS === 'android') {
                const granted = await PermissionsAndroid.request(
                    PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION
                );
                if (granted !== PermissionsAndroid.RESULTS.GRANTED) {
                    console.log('Permiso de ubicación denegado');
                }
            }
        };
        solicitarPermisos();
    }, []);

    const onReady = async (result: any) => {

        console.log('onReady', result)
        if (!result?.legs?.[0]?.steps) return;

        setDistance(result.distance.toFixed(2))
        setDuration(result.duration.toFixed(2))
        
        const pasos = result.legs[0].steps;

        setInstrucciones(enDestino ? [] : pasos);

        const routePoints = polyline.decode(result.overview_polyline.points).map((p: any) => ({
            latitude: p[0],
            longitude: p[1],
        }));

        setPolylinePoints(routePoints);
        setIndicePaso(0);

        const start = {
            latitude: result.legs[0].start_location.lat,
            longitude: result.legs[0].start_location.lng,
        };

        mapRef.current?.animateCamera({
            center: start,
            zoom: 20,
            pitch: 60,
            heading,
        }, { duration: 1000 });
    };

    useEffect(() => {
        const primera = instrucciones[0]?.html_instructions?.replace(/<[^>]+>/g, '');
        if (instrucciones.length > 0 && indicePaso === 0 && instruccionActual !== primera && !enDestino) {
            if (primera) {
                setTimeout(() => speak(primera, 'primera'), 800);
            }
        } else if (enDestino) {
            setTimeout(() => speak('Haz llegado a tu desino', 'primera'), 800);
        }
    }, [instrucciones]);

    const regionInicial = useMemo(
        () => ({
            latitude: origen?.latitude || 19.4326,
            longitude: origen?.longitude || -99.1332,
            latitudeDelta: 0.05,
            longitudeDelta: 0.05,
        }),
        [origen]
    );

    const centerMap = () => {
        mapRef.current?.animateCamera({
            center: origen,
            zoom: 17,
            pitch: 60,
            heading,
        }, { duration: 1000 });
    }

    const fitRuta = () => {
        if (!mapRef.current || !origen || !destino) return;

        mapRef.current.fitToCoordinates(
            [origen, destino],
            {
                edgePadding: {
                    top: 100,
                    right: 50,
                    bottom: 100,
                    left: 50,
                },
                animated: true,
            }
        );
    };

    return {
        origen,
        mapRef,
        onReady,
        instrucciones,
        indicePaso,
        heading,
        regionInicial,
        enDestino,
        onToggleSwitch,
        isSwitchOn,
        centerMap,
        fitRuta,
        distance,
        duration
    };

};

export default useTest;
