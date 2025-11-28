import {
    Text,
    View
} from "react-native"
import CustomHeader from "../../navigators/DrawerNavigator/customHeader";
import { mainStyle } from "../../theme/styles";
import { useSelector } from "react-redux";
import detalleEntradaStyle from "./detalleEntradaStyle";

const DetalleEntrada = () => {
    const theme = useSelector((state: any) => state?.app?.theme || '#fff');
    return (
        <View style={mainStyle.container}>
            <CustomHeader bgColor={theme} />
            <View style={detalleEntradaStyle.perfilContainer}>
                <Text>detalleEntrada</Text>
            </View >
        </View>
    )
}



export default DetalleEntrada;