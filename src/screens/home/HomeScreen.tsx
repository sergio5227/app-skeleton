import { Dimensions, View } from "react-native";
import { Button } from "react-native-paper";
import { useState } from "react";
import NavegacionSimulada from "../../components/MapaNavegacion/MapaNavegacion";
import Test from "../../components/MapaNavegacion/test";

const HomeScreen = () => {
    const height = Dimensions.get('screen').height
    const [opt, setOpt] = useState(0)
    return (
        <View style={{ height, }}>
            <View style={{ flex: 1 }}>
                {opt === 1 ? <NavegacionSimulada
                    regresar={() => setOpt(0)}
                    destino={{
                        latitude: 19.41381330912339,
                        longitude: -99.13624336264698
                    }} /> : opt === 2 ? <Test regresar={() => setOpt(0)} destino={{
                        latitude: 19.41381330912339,
                        longitude: -99.13624336264698
                    }} /> :
                    <View style={{ flex: 1 }}>
                        <Button onPress={() => setOpt(1)} >Opción 1</Button>
                        <Button onPress={() => setOpt(2)}>Opción 2</Button>
                    </View>
                }
            </View>
        </View>
    )
}

export default HomeScreen;