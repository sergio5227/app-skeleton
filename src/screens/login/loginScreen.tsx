import { NavigationProp, useNavigation } from "@react-navigation/native";
import { Text, View } from "react-native"
import { Button, IconButton } from "react-native-paper";
import { RootStackParams } from "../../navigators/mainNavigator/mainNavigator";
import { mainStyle } from "../../theme/styles";

const LoginScreen = () => {
    const navigation = useNavigation<NavigationProp<RootStackParams>>();
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
            <View style={{ flex: 1, justifyContent: 'center', alignContent: 'center', alignItems: 'center' }}>
                <Text>Hola bonsai</Text>
            </View>
            
        </View>
    )
}

export default LoginScreen;