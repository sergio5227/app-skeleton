import { Alert, Dimensions, Text, View } from "react-native";
import { Button } from "react-native-paper";
import { useState } from "react";
import NavegacionSimulada from "../../components/MapaNavegacion/MapaNavegacion";
import Test from "../../components/MapaNavegacion/test";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { showLocation } from 'react-native-map-link';
import { useDispatch, useSelector } from "react-redux";
import { setCount } from "../../actions/dispatches/counter";

const HomeScreen = () => {
    const cuenta = useSelector((state: any) => state?.app?.count || 0);
    const dispatch = useDispatch();
    const insets = useSafeAreaInsets();
    const height = Dimensions.get('screen').height
    const [opt, setOpt] = useState(0)
    
    const destino = {
        latitude: 19.41381330912339,
        longitude: -99.13624336264698
    }
    
    const incrementa = () => {
        dispatch(setCount(cuenta+1));
    }
    
    const decrementa = () => {
        dispatch(setCount(cuenta-1));
    }

    const res = () => {
        dispatch(setCount(0));
    }
    const handleNavigate = () => {
        Alert.alert('a', 'aa')
        showLocation({
            latitude: destino?.latitude,
            longitude: destino?.longitude,
            title: 'Destino',
            dialogTitle: 'Opciones de navegación',
            dialogMessage: 'Selecciona una opción',
            cancelText: 'Cancelar',
            //appsWhiteList: ['google-maps', 'waze', 'apple-maps'], // opcional
        });
    }
    
    return (
        <View style={{
            height, paddingTop: insets.top,
            paddingLeft: insets.left,
            paddingBottom: insets.bottom,
            paddingRight: insets.right,
        }}>
            <View style={{ flex: 1 }}>
                {opt === 1 ? <NavegacionSimulada
                    regresar={() => setOpt(0)}
                    destino={destino} /> : null}
                {opt === 2 ? <Test regresar={() => setOpt(0)} destino={destino} /> : null}
                {opt === 0 ? <View style={{ flex: 1 }}>
                    <Button onPress={() => setOpt(1)} >Opción 1</Button>
                    <Button onPress={() => setOpt(2)}>Opción 2</Button>
                    <Button onPress={() => handleNavigate()}>OPCIONES DE LA LISTA</Button>
                </View> : null}
                <View style={{flex:1}}>
                    <Text> {cuenta} </Text>
                </View>
                <View style={{flex:1}}>
                    <Button onPress={() => incrementa()} >+1</Button>
                    <Button onPress={() => decrementa()}>-1</Button>
                    <Button onPress={() => res()}>Reset counter</Button>
                </View>
            </View>
        </View>
    )
}

export default HomeScreen;