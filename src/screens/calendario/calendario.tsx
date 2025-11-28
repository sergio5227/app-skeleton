import { Text, View } from "react-native"
import CustomHeader from "../../navigators/DrawerNavigator/customHeader";
import { RouteProp, useRoute } from "@react-navigation/native";
import { RootStackParams } from "../../navigators/mainNavigator/mainNavigator";
import { mainStyle } from "../../theme/styles";
import Agenda from "../../components/Agenda/Agenda";
import { useSelector } from "react-redux";

const Calendario = () => {
    const params = useRoute<RouteProp<RootStackParams, 'Calendario'>>().params;
    const theme = useSelector((state: any) => state?.app?.theme || '#fff');
    return (
        <View style={mainStyle.container}>
            <CustomHeader regresar={params?.regresar} bgColor={theme} />
            <View style={{ flex: 1, marginTop: 50, paddingLeft: 10, paddingRight: 10 }}>
                <Agenda onPress={(e) => {
                    console.log('detalle de evento', e)
                }} />
            </View >
        </View>
    )
}

export default Calendario;