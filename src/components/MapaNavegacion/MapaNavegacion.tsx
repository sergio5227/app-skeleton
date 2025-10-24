import React, { FC, memo, useMemo } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps';
import MapViewDirections from 'react-native-maps-directions';
import useMapaNavegacion from './useMapaNavegacion';
import MapaNavegacionStyles from './MapaNavegacionStyles';
import { Button } from 'react-native-paper';

const GOOGLE_MAPS_APIKEY = 'AIzaSyANkBT5FmnbJhZPrPHYYhGHuS4KocaL3x8';

interface Destino {
  latitude: number
  longitude: number
}

interface NavegacionSimuladaProps {
  destino: Destino
  regresar: () => void
}

const NavegacionSimulada: FC<NavegacionSimuladaProps> = (props: NavegacionSimuladaProps) => {

  const {
    origen,
    mapRef,
    onReady,
    instrucciones,
    indicePaso,
    heading
  } = useMapaNavegacion();

  const regionInicial = useMemo(
    () => ({
      latitude: origen?.latitude || 19.4326,
      longitude: origen?.longitude || -99.1332,
      latitudeDelta: 0.05,
      longitudeDelta: 0.05,
    }),
    [origen]
  );

  if (!origen) {
    return (
      <View style={MapaNavegacionStyles.loading}>
        <Text>Obteniendo ubicación por favor espere un momento...</Text>
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
        showsTraffic
      >
        {/* Marca del destino */}
        <Marker coordinate={props?.destino} title="Destino" />

        {/*Marca ubicación actual  */}
        <Marker.Animated
          coordinate={origen}
          anchor={{ x: 0.5, y: 0.5 }}
          rotation={heading}
          flat={true}
        >
          <Image source={require('./car.png')} style={{ width: 40, height: 40 }} />
        </Marker.Animated>

        {/* Linea de la ruta sugerida */}
        <MapViewDirections
          origin={origen}
          destination={props?.destino}
          apikey={GOOGLE_MAPS_APIKEY}
          strokeWidth={10}
          strokeColor="#f60"
          mode="DRIVING"
          language='es'
          onReady={onReady}
          optimizeWaypoints={false}
          timePrecision="now"
          resetOnChange={false}
        />
      </MapView>

      {/* Instrucciones y acciones */}
      <View style={MapaNavegacionStyles.panel}>
        <Text style={MapaNavegacionStyles.paso}>
          {instrucciones[indicePaso]
            ? instrucciones[indicePaso].html_instructions.replace(/<[^>]+>/g, '')
            : 'Calculando la ruta...'}
        </Text>
        <Button onPress={() => props?.regresar()} >regresar</Button>
      </View>

    </View>
  );
}

export default memo(NavegacionSimulada);

