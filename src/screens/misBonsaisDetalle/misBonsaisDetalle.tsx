import {
    Text,
    View
} from "react-native"
import CustomHeader from "../../navigators/DrawerNavigator/customHeader";
import { mainStyle } from "../../theme/styles";
import { useSelector } from "react-redux";
import misBonsaisDetalleStyle from "./misBonsaisDetalleStyle";
import { useRoute, RouteProp } from "@react-navigation/native";
import { RootStackParams } from "../../navigators/mainNavigator/mainNavigator";

const MisBonsaisDetalle = () => {
    const theme = useSelector((state: any) => state?.app?.theme || '#fff');
    const params = useRoute<RouteProp<RootStackParams, 'MisBonsaisDetalle'>>().params;
    return (
        <View style={mainStyle.container}>
            <CustomHeader bgColor={theme} regresar={params?.regresar} />
            <View style={misBonsaisDetalleStyle.misBonsaisDetalleContainer}>
                <Text style={mainStyle.mainTitle}>
                    {params?.data?.detalle?.nombre}
                </Text>
                <Text style={mainStyle.regularText}>
                    {JSON.stringify(params?.data?.detalle)}
                </Text>
            </View >
        </View>
    )
}

export default MisBonsaisDetalle;