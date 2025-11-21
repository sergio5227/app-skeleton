import { Text, View } from "react-native"
import CustomHeader from "../../navigators/DrawerNavigator/customHeader";
import { mainStyle } from "../../theme/styles";

const MiPerfil = () => {
    
    return (
        <View style={mainStyle.container}>
            <CustomHeader />
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', borderWidth: 1, marginVertical: 15 }}>
                <Text>
                    Mi perfil
                </Text>
            </View >
        </View>
    )
}

export default MiPerfil;