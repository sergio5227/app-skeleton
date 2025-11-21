import { Text, View } from "react-native";
import { Button, IconButton } from "react-native-paper";
import { useState } from "react";
import Test from "../../components/MapaNavegacion/test";
import { showLocation } from 'react-native-map-link';
import { useDispatch, useSelector } from "react-redux";
import { setCount } from "../../actions/dispatches/counter";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import { RootStackParams } from "../../navigators/mainNavigator/mainNavigator";
import { mainStyle } from "../../theme/styles";

const HomeScreen = () => {
    const navigation = useNavigation<NavigationProp<RootStackParams>>();
    const dispatch = useDispatch();
    const cuenta = useSelector((state: any) => state?.app?.count || 0);
    const [opt, setOpt] = useState(0);

    const destino = {
        latitude: 19.41381330912339,
        longitude: -99.13624336264698
    }

    const incrementa = () => {
        dispatch(setCount(cuenta + 1));
    }

    const decrementa = () => {
        dispatch(setCount(cuenta - 1));
    }

    const res = () => {
        dispatch(setCount(0));
    }

    const handleNavigate = () => {
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
        <View style={mainStyle.container}>
            <View style={{ alignItems: 'stretch' }}>
                <IconButton
                    icon="arrow-left-circle"
                    iconColor={'#212121ff'}
                    size={25}
                    style={{ margin: 0 }}
                    onPress={() => navigation.goBack()}
                />
            </View>

            {opt === 2 ? <Test regresar={() => setOpt(0)} destino={destino} /> : null}

            {opt === 0 ? <View style={{}}>
                <Button onPress={() => setOpt(1)} >Navegar</Button>
                <Button onPress={() => handleNavigate()}>OPCIONES DE LA LISTA</Button>
            </View> : null}

            <View style={{ borderWidth: 1, flex: 1, justifyContent: 'center', alignContent: 'center', alignItems: 'center' }}>
                <Text> {cuenta} </Text>
            </View>

            <View style={{ justifyContent: 'center', alignContent: 'center', alignItems: 'center' }}>
                <Button onPress={() => incrementa()} >+1</Button>
                <Button onPress={() => decrementa()}>-1</Button>
                <Button onPress={() => res()}>Reset counter</Button>
            </View>

        </View>

    )
}

export default HomeScreen;