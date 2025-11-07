import { NavigationProp, useNavigation } from "@react-navigation/native";
import { Text, View } from "react-native"
import { IconButton } from "react-native-paper";
import { RootStackParams } from "../../navigators/mainNavigator/mainNavigator";

const DetailsPeliculas = () => {

    const navigation = useNavigation<NavigationProp<RootStackParams>>();

    return (
        <View style={{ flex: 1 }}>
            <View style={{ alignItems: 'stretch' }}>
                <IconButton
                    icon="arrow-left-circle"
                    iconColor={'#212121ff'}
                    size={25}
                    style={{ margin: 0 }}
                    onPress={() => navigation.goBack()}
                />
            </View>
            <Text>
                DetailsPeliculas
            </Text>
        </View>
    )
}

export default DetailsPeliculas;