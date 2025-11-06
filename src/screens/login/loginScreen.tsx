import { NavigationProp, useNavigation } from "@react-navigation/native";
import { Text, View } from "react-native"
import { Button } from "react-native-paper";
import { RootStackParams } from "../../navigators/mainNavigator/mainNavigator";

const LoginScreen = () => {
    const navigation = useNavigation<NavigationProp<RootStackParams>>();
    return (
        <View style={{ flex: 1, backgroundColor: 'white' }}>
            <View style={{ flex: 1, justifyContent:'center', alignContent:'center', alignItems:'center' }}>
                <Text>Hola bonsai</Text>
            </View>
            <View>
                <Button onPress={() => {
                    navigation.navigate('HomeScreen')
                }}>Ir al detalle</Button>
            </View>
        </View>
    )
}

export default LoginScreen;