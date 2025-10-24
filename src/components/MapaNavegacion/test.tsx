import React, { FC, memo } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps';
import MapViewDirections from 'react-native-maps-directions';
import MapaNavegacionStyles from './MapaNavegacionStyles';
import { IconButton, MD3Colors } from 'react-native-paper';
import useTest from './useTest';

const GOOGLE_MAPS_APIKEY = 'AIzaSyANkBT5FmnbJhZPrPHYYhGHuS4KocaL3x8';

export interface Destino {
    latitude: number;
    longitude: number;
}

interface NavegacionSimuladaProps {
    destino: Destino;
    regresar: () => void;
}

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
        isSwitchOn
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
            <MapView
                ref={mapRef}
                provider={PROVIDER_GOOGLE}
                style={StyleSheet.absoluteFillObject}
                showsUserLocation
                followsUserLocation
                rotateEnabled
                pitchEnabled
                initialRegion={regionInicial}
                showsCompass={false}
                //showsTraffic
                moveOnMarkerPress={false}
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
                    mode="DRIVING"
                    language="es"
                    onReady={onReady}
                    optimizeWaypoints={false}
                    timePrecision="now"
                //resetOnChange={false}// ver si nos sirve
                />
            </MapView>
            {/* Panel de instrucciones */}
            <View style={MapaNavegacionStyles.panel}>
                <Text style={MapaNavegacionStyles.paso}>
                    {instrucciones[indicePaso]
                        ? instrucciones[indicePaso].html_instructions.replace(/<[^>]+>/g, '')
                        : enDestino ? 'Haz llegado a tu destino' : 'Calculando la ruta...'}
                </Text>
                <View style={MapaNavegacionStyles.acciones}>
                    <View style={{ flex: 1, justifyContent: 'center', alignContent: 'center', alignItems: 'center' }}>
                        <View style={{ borderWidth: 1, borderRadius: 50, borderColor: MD3Colors.error60 }}>
                            <IconButton
                                icon="arrow-left"
                                iconColor={MD3Colors.error60}
                                size={20}
                                onPress={() => regresar()}
                            />
                        </View>
                    </View>
                    <View style={{ flex: 1, justifyContent: 'center', alignContent: 'center', alignItems: 'center' }}>
                        <View style={{ borderWidth: 1, borderRadius: 50, borderColor: MD3Colors.error60 }}>
                            <IconButton
                                icon="volume-high"
                                iconColor={isSwitchOn ? MD3Colors.error60 : MD3Colors.secondary60}
                                size={20}
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