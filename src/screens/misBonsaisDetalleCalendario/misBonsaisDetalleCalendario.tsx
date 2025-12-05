import {
    Text,
    View
} from "react-native"
import CustomHeader from "../../navigators/DrawerNavigator/customHeader";
import { mainStyle } from "../../theme/styles";
import { useSelector } from "react-redux";
import { useRoute, RouteProp } from "@react-navigation/native";
import { BonsaiDetailNavigatorParams } from "../../navigators/bonsaiDetailNavigator/bonsaiDetailNavigator";


const MisBonsaisDetalleCalendario = () => {
    const theme = useSelector((state: any) => state?.app?.theme || '#fff');
    const params = useRoute<RouteProp<BonsaiDetailNavigatorParams, 'MisBonsaisDetalle'>>().params;
    return (
        <View style={mainStyle.container}>
            <CustomHeader bgColor={theme} regresar={params?.regresar}/>
            <View style={{
                marginTop: 50,
                flex: 1,
                marginVertical: 15,
                paddingLeft: 10,
                paddingRight: 10
            }}>
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

export default MisBonsaisDetalleCalendario;