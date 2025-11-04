import React, { FC, memo } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps';
import MapViewDirections from 'react-native-maps-directions';
import MapaNavegacionStyles from './MapaNavegacionStyles';
import { IconButton, MD3Colors } from 'react-native-paper';
import useTest from './useTest';
import { KeepAwake } from '@thehale/react-native-keep-awake';

const GOOGLE_MAPS_APIKEY = 'AIzaSyANkBT5FmnbJhZPrPHYYhGHuS4KocaL3x8';

export interface Destino {
    latitude: number;
    longitude: number;
}

interface NavegacionSimuladaProps {
    destino: Destino;
    regresar: () => void;
}

const mapStyle = [
    {
        featureType: "poi", // todos los puntos de interés (negocios, parques, etc.)
        stylers: [{ visibility: "off" }],
    },
    {
        featureType: "transit", // paradas de transporte
        stylers: [{ visibility: "off" }],
    },
    {
        featureType: "road.local", // nombres de calles locales
        elementType: "labels",
        stylers: [{ visibility: "off" }],
    },
];


const Test: FC<NavegacionSimuladaProps> = ({ destino, regresar }) => {

    const {
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
    } = useTest(destino);

    if (!origen) {
        return (
            <View style={MapaNavegacionStyles.loading}>
                <Text>Obteniendo ubicación, por favor espere un momento...</Text>
            </View>
        );
    }

    return (
        <View style={MapaNavegacionStyles.container}>
            <KeepAwake />
            <View style={MapaNavegacionStyles.panel}>
                <Text style={MapaNavegacionStyles.paso}>
                    {instrucciones[indicePaso]
                        ? instrucciones[indicePaso].html_instructions.replace(/<[^>]+>/g, '')
                        : enDestino ? 'Haz llegado a tu destino' : 'Calculando la ruta...'}

                </Text>
            </View>
            {distance && duration ? <View style={MapaNavegacionStyles.panel}>
                <Text style={{ ...MapaNavegacionStyles.paso, ...{ fontWeight: '400', fontSize: 12, color: MD3Colors.error60 } }}>
                    {`Distancia:${distance} km, tiempo aproximado de recorrido: ${duration} hrs`}
                </Text>
            </View> : null}

            <View style={{ flex: 1, backgroundColor: 'red' }}>
                <MapView
                    customMapStyle={mapStyle}
                    showsBuildings={false}
                    showsCompass={false}
                    showsTraffic={false}
                    ref={mapRef}
                    provider={PROVIDER_GOOGLE}
                    style={StyleSheet.absoluteFillObject}
                    //showsUserLocation
                    followsUserLocation
                    rotateEnabled
                    pitchEnabled
                    initialRegion={regionInicial}
                    moveOnMarkerPress={false}
                    onMapReady={() => console.log('ready')}
                >
                    {/* Destino */}
                    <Marker coordinate={destino} title="Destino" />
                    {/* Ubicación actual */}
                    <Marker.Animated
                        coordinate={origen}
                        anchor={{ x: 0.5, y: 0.5 }}
                        rotation={heading}
                        flat
                    >
                        <Image source={require('./car.png')} style={{ width: 40, height: 40 }} />
                    </Marker.Animated>
                    {/* Línea de la ruta */}
                    <MapViewDirections
                        origin={origen}
                        destination={destino}
                        apikey={GOOGLE_MAPS_APIKEY}
                        strokeWidth={7}
                        strokeColor="#f60"
                        onError={(ww) => console.log(ww)}
                        mode="DRIVING"
                        language="es"
                        onReady={onReady}
                        optimizeWaypoints={false}
                        timePrecision="now"
                    //resetOnChange={false}// ver si nos sirve
                    />
                </MapView>
            </View>
            {/* Panel de instrucciones */}
            <View style={{ ...MapaNavegacionStyles.panel, ...{ borderRadius: 0 } }}>
                <View style={MapaNavegacionStyles.acciones}>
                    <View style={{ flex: 1, justifyContent: 'center', alignContent: 'center', alignItems: 'center' }}>
                        <View style={{ borderWidth: 1, borderRadius: 50, borderColor: MD3Colors.error60 }}>
                            <IconButton
                                icon="arrow-left"
                                iconColor={MD3Colors.error60}
                                size={15}
                                onPress={() => regresar()}
                            />
                        </View>
                    </View>
                    <View style={{ flex: 1, justifyContent: 'center', alignContent: 'center', alignItems: 'center' }}>
                        <View style={{ borderWidth: 1, borderRadius: 50, borderColor: MD3Colors.error60 }}>
                            <IconButton
                                icon="crosshairs-gps"
                                iconColor={MD3Colors.error60}
                                size={15}
                                onPress={() => centerMap()}
                            />
                        </View>
                    </View>
                    <View style={{ flex: 1, justifyContent: 'center', alignContent: 'center', alignItems: 'center' }}>
                        <View style={{ borderWidth: 1, borderRadius: 50, borderColor: MD3Colors.error60 }}>
                            <IconButton
                                icon="map-marker-distance"//road-variant
                                iconColor={MD3Colors.error60}
                                size={15}
                                onPress={() => fitRuta()}
                            />
                        </View>
                    </View>
                    <View style={{ flex: 1, justifyContent: 'center', alignContent: 'center', alignItems: 'center' }}>
                        <View style={{ borderWidth: 1, borderRadius: 50, borderColor: isSwitchOn ? MD3Colors.error60 : MD3Colors.secondary60 }}>
                            <IconButton
                                icon="volume-high"
                                iconColor={isSwitchOn ? MD3Colors.error60 : MD3Colors.secondary60}
                                size={15}
                                onPress={() => onToggleSwitch()}
                            />
                        </View>
                    </View>
                </View>
            </View>
        </View>
    );
};

export default memo(Test);