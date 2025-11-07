import { Text, View } from "react-native"
import { Button } from "react-native-paper";
import useHomePeliculas from "./useHomePeliculas";

const HomePeliculas = () => {

    const {
        data,
        navigation
    } = useHomePeliculas();

    return (
        <View style={{ flex: 1 }}>
            <View style={{ flex: 1, justifyContent: 'center', alignContent: 'center', alignItems: 'center' }}>
                <Text>Peliculas</Text>
                <Text> {JSON.stringify(data)} </Text>
            </View>
            <View>
                <Button onPress={() => {
                    navigation.navigate('DetailsPeliculas');
                }}>Ir al detalle</Button>
            </View>
        </View>
    )
}

export default HomePeliculas;