import { Text, View } from "react-native"
import CustomHeader from "../../navigators/DrawerNavigator/customHeader";
import { RouteProp, useRoute } from "@react-navigation/native";
import { RootStackParams } from "../../navigators/mainNavigator/mainNavigator";
import { mainStyle } from "../../theme/styles";

const ExplorarEspecies = () => {
    
    const params = useRoute<RouteProp<RootStackParams, 'ExplorarEspecies'>>().params;

    return (
        <View style={mainStyle.container}>
            <CustomHeader regresar={params?.regresar} />
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', borderWidth: 1, marginVertical: 15 }}>
                <Text>
                    Explorar especies
                </Text>
            </View >
        </View>
    )
}

export default ExplorarEspecies;